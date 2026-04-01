from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="MA LAKSHMI RADIO SALES & SERVICE API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class SheetConfig(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    sheet_url: str
    sheet_type: str  # 'products', 'banners', 'all'
    last_updated: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class SheetConfigCreate(BaseModel):
    sheet_url: str
    sheet_type: str = "all"


class EnquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    message: str
    product_name: Optional[str] = None


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    message: str
    product_name: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


# Demo data (fallback)
DEMO_BANNERS = [
    {
        "id": "1",
        "title": "Best Deals on LED TVs",
        "subtitle": "32\" to 65\" Smart TVs from Top Brands",
        "image": "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/eaea51a459c5fcad67e7704b93615f14273a623f13953a44c94f33a93b962a52.png",
        "ctaText": "Get Best Price",
        "category": "TVs",
        "priority": 1
    },
    {
        "id": "2",
        "title": "AC Installation & Service",
        "subtitle": "Expert Installation | Annual Maintenance | Gas Refilling",
        "image": "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/55b9e489695c10d7aa91c449e6c74d2835ddf4664f5829c7ed3f27254dbf3106.png",
        "ctaText": "Book Now",
        "category": "Services",
        "priority": 2
    },
    {
        "id": "3",
        "title": "Refrigerator & Washing Machine",
        "subtitle": "Festive Offers on Top Brands",
        "image": "https://images.pexels.com/photos/7614540/pexels-photo-7614540.jpeg",
        "ctaText": "Enquire Now",
        "category": "Appliances",
        "priority": 3
    },
    {
        "id": "4",
        "title": "EMI & Finance Available",
        "subtitle": "Easy EMI Options | 0% Down Payment | Quick Approval",
        "image": "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
        "ctaText": "Know More",
        "category": "Finance",
        "priority": 4
    }
]

DEMO_PRODUCTS = [
    {
        "id": "tv-001",
        "name": "Samsung 32\" HD Ready Smart LED TV",
        "brand": "Samsung",
        "category": "TVs & LED",
        "subcategory": "32 LED",
        "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        "features": ["HD Ready Display", "Smart TV with Apps", "20W Speaker Output"],
        "inStock": True,
        "offer": "Festival Sale",
        "priority": 1
    },
    {
        "id": "tv-002",
        "name": "LG 43\" 4K Ultra HD Smart LED TV",
        "brand": "LG",
        "category": "TVs & LED",
        "subcategory": "43 LED",
        "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        "features": ["4K Ultra HD", "WebOS Smart Platform", "AI ThinQ"],
        "inStock": True,
        "offer": "Best Seller",
        "priority": 2
    },
    {
        "id": "ac-001",
        "name": "Voltas 1.5 Ton 5 Star Inverter Split AC",
        "brand": "Voltas",
        "category": "Air Conditioners",
        "subcategory": "AC",
        "image": "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/ae7e73aa61ea9dcfa8010030b5a4d9b1d862f01f61a01338906ed65f5d76c3bc.png",
        "features": ["5 Star Rating", "Inverter Technology", "Copper Condenser"],
        "inStock": True,
        "offer": "Summer Special",
        "priority": 1
    },
    {
        "id": "ref-001",
        "name": "Samsung 253L Frost Free Double Door Refrigerator",
        "brand": "Samsung",
        "category": "Refrigerators",
        "subcategory": "Frost Free Refrigerator",
        "image": "https://static.prod-images.emergentagent.com/jobs/106c5b52-9715-497a-a4d4-9e8a93d6ca01/images/f5cd08f57cc3b1d1b1a9ac2e9a2e3ad46a1c71010a22a89f50a19106a2776a0c.png",
        "features": ["Digital Inverter", "Convertible 5-in-1", "All Around Cooling"],
        "inStock": True,
        "offer": "Best Seller",
        "priority": 1
    },
    {
        "id": "wm-001",
        "name": "LG 7Kg Fully Automatic Top Load Washing Machine",
        "brand": "LG",
        "category": "Washing Machines",
        "subcategory": "Top Load Washing Machine",
        "image": "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
        "features": ["Smart Inverter", "TurboDrum", "Smart Diagnosis"],
        "inStock": True,
        "offer": "Popular",
        "priority": 1
    },
    {
        "id": "ka-001",
        "name": "Prestige 750W Mixer Grinder",
        "brand": "Prestige",
        "category": "Kitchen Appliances",
        "subcategory": "Mixer Grinder",
        "image": "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
        "features": ["750W Motor", "3 Stainless Steel Jars", "2 Year Warranty"],
        "inStock": True,
        "offer": "Best Value",
        "priority": 1
    },
    {
        "id": "au-001",
        "name": "Sony 5.1 Channel Home Theater System",
        "brand": "Sony",
        "category": "Audio Systems",
        "subcategory": "Home Theater",
        "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
        "features": ["1000W Output", "Bluetooth", "USB Playback"],
        "inStock": True,
        "offer": "Premium",
        "priority": 1
    },
    {
        "id": "fan-001",
        "name": "Crompton 1200mm Ceiling Fan",
        "brand": "Crompton",
        "category": "Fans & Coolers",
        "subcategory": "Ceiling Fan",
        "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400",
        "features": ["High Speed", "Energy Efficient", "5 Year Warranty"],
        "inStock": True,
        "offer": "",
        "priority": 1
    }
]


async def parse_google_sheet_csv(sheet_url: str):
    """
    Parse Google Sheets CSV export URL and return data
    Expected format: https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=csv
    """
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(sheet_url)
            if response.status_code != 200:
                logger.error(f"Failed to fetch sheet: {response.status_code}")
                return None
            
            import csv
            from io import StringIO
            
            csv_content = response.text
            reader = csv.DictReader(StringIO(csv_content))
            rows = list(reader)
            
            return rows
    except Exception as e:
        logger.error(f"Error parsing Google Sheet: {e}")
        return None


def transform_sheet_to_products(rows):
    """Transform Google Sheets rows to product format"""
    products = []
    for row in rows:
        try:
            product = {
                "id": row.get("id", str(uuid.uuid4())),
                "name": row.get("name", ""),
                "brand": row.get("brand", ""),
                "category": row.get("category", ""),
                "subcategory": row.get("subcategory", ""),
                "image": row.get("image", ""),
                "features": [f.strip() for f in row.get("features", "").split("|") if f.strip()],
                "inStock": row.get("inStock", "true").lower() == "true",
                "offer": row.get("offer", ""),
                "priority": int(row.get("priority", 99))
            }
            if product["name"]:  # Only add if name exists
                products.append(product)
        except Exception as e:
            logger.error(f"Error transforming row: {e}")
            continue
    return products


def transform_sheet_to_banners(rows):
    """Transform Google Sheets rows to banner format"""
    banners = []
    for row in rows:
        try:
            banner = {
                "id": row.get("id", str(uuid.uuid4())),
                "title": row.get("title", ""),
                "subtitle": row.get("subtitle", ""),
                "image": row.get("image", ""),
                "ctaText": row.get("ctaText", "Enquire Now"),
                "category": row.get("category", ""),
                "priority": int(row.get("priority", 99))
            }
            if banner["title"]:  # Only add if title exists
                banners.append(banner)
        except Exception as e:
            logger.error(f"Error transforming banner row: {e}")
            continue
    return banners


# Routes
@api_router.get("/")
async def root():
    return {"message": "MA LAKSHMI RADIO SALES & SERVICE API", "status": "running"}


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.get("/sheet-data")
async def get_sheet_data():
    """
    Get data from configured Google Sheet, or return demo data as fallback
    """
    # Try to get sheet config from database
    sheet_config = await db.sheet_config.find_one({}, {"_id": 0})
    
    if sheet_config and sheet_config.get("sheet_url"):
        sheet_url = sheet_config["sheet_url"]
        rows = await parse_google_sheet_csv(sheet_url)
        
        if rows:
            # Determine data type from rows
            if rows and "title" in rows[0]:
                banners = transform_sheet_to_banners(rows)
                return {
                    "isDemo": False,
                    "banners": banners,
                    "products": DEMO_PRODUCTS,
                    "source": "google_sheets"
                }
            else:
                products = transform_sheet_to_products(rows)
                return {
                    "isDemo": False,
                    "products": products,
                    "banners": DEMO_BANNERS,
                    "source": "google_sheets"
                }
    
    # Return demo data
    return {
        "isDemo": True,
        "banners": DEMO_BANNERS,
        "products": DEMO_PRODUCTS,
        "source": "demo"
    }


@api_router.post("/sheet-config")
async def save_sheet_config(config: SheetConfigCreate):
    """Save Google Sheet configuration"""
    sheet_config = SheetConfig(
        sheet_url=config.sheet_url,
        sheet_type=config.sheet_type
    )
    doc = sheet_config.model_dump()
    doc['last_updated'] = doc['last_updated'].isoformat()
    
    # Upsert - update if exists, insert if not
    await db.sheet_config.update_one(
        {},
        {"$set": doc},
        upsert=True
    )
    
    return {"message": "Sheet configuration saved", "config": doc}


@api_router.get("/sheet-config")
async def get_sheet_config():
    """Get current Google Sheet configuration"""
    config = await db.sheet_config.find_one({}, {"_id": 0})
    if config:
        return config
    return {"message": "No sheet configured", "sheet_url": None}


@api_router.post("/enquiry", response_model=Enquiry)
async def create_enquiry(enquiry: EnquiryCreate):
    """Create a new enquiry/lead"""
    enquiry_obj = Enquiry(**enquiry.model_dump())
    doc = enquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.enquiries.insert_one(doc)
    
    return enquiry_obj


@api_router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries():
    """Get all enquiries"""
    enquiries = await db.enquiries.find({}, {"_id": 0}).to_list(1000)
    for enquiry in enquiries:
        if isinstance(enquiry.get('created_at'), str):
            enquiry['created_at'] = datetime.fromisoformat(enquiry['created_at'])
    return enquiries


@api_router.get("/products")
async def get_products(category: Optional[str] = None):
    """Get products, optionally filtered by category"""
    # Try to get from sheet first
    sheet_data = await get_sheet_data()
    products = sheet_data.get("products", DEMO_PRODUCTS)
    
    if category:
        products = [p for p in products if p.get("category") == category]
    
    return {"products": products, "isDemo": sheet_data.get("isDemo", True)}


@api_router.get("/banners")
async def get_banners():
    """Get hero banners"""
    sheet_data = await get_sheet_data()
    return {"banners": sheet_data.get("banners", DEMO_BANNERS), "isDemo": sheet_data.get("isDemo", True)}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
