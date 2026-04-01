#!/usr/bin/env python3
"""
Backend API Testing for MA LAKSHMI RADIO SALES & SERVICE
Tests all API endpoints for functionality and data integrity
"""

import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class ElectronicsShowroomAPITester:
    def __init__(self, base_url="https://electronics-hub-129.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "response_data": response_data
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"    Details: {details}")
        if not success and response_data:
            print(f"    Response: {response_data}")

    def run_test(self, name: str, method: str, endpoint: str, expected_status: int, data: Dict = None, headers: Dict = None) -> tuple:
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            response_data = None
            
            try:
                response_data = response.json()
            except:
                response_data = response.text

            details = f"Status: {response.status_code} (expected {expected_status})"
            self.log_test(name, success, details, response_data if not success else None)
            
            return success, response_data

        except Exception as e:
            self.log_test(name, False, f"Error: {str(e)}")
            return False, {}

    def test_health_endpoints(self):
        """Test basic health and status endpoints"""
        print("\n🔍 Testing Health & Status Endpoints...")
        
        # Test root endpoint
        self.run_test("API Root", "GET", "", 200)
        
        # Test health endpoint
        self.run_test("Health Check", "GET", "health", 200)

    def test_sheet_data_endpoint(self):
        """Test sheet data endpoint (main data source)"""
        print("\n🔍 Testing Sheet Data Endpoint...")
        
        success, data = self.run_test("Get Sheet Data", "GET", "sheet-data", 200)
        
        if success and data:
            # Validate data structure
            required_keys = ['isDemo', 'banners', 'products', 'source']
            missing_keys = [key for key in required_keys if key not in data]
            
            if missing_keys:
                self.log_test("Sheet Data Structure", False, f"Missing keys: {missing_keys}")
            else:
                self.log_test("Sheet Data Structure", True, "All required keys present")
                
                # Test banners data
                banners = data.get('banners', [])
                if banners and len(banners) > 0:
                    banner = banners[0]
                    banner_keys = ['id', 'title', 'subtitle', 'image']
                    missing_banner_keys = [key for key in banner_keys if key not in banner]
                    
                    if missing_banner_keys:
                        self.log_test("Banner Data Structure", False, f"Missing keys: {missing_banner_keys}")
                    else:
                        self.log_test("Banner Data Structure", True, f"Found {len(banners)} banners")
                else:
                    self.log_test("Banner Data", False, "No banners found")
                
                # Test products data
                products = data.get('products', [])
                if products and len(products) > 0:
                    product = products[0]
                    product_keys = ['id', 'name', 'brand', 'category', 'image', 'features']
                    missing_product_keys = [key for key in product_keys if key not in product]
                    
                    if missing_product_keys:
                        self.log_test("Product Data Structure", False, f"Missing keys: {missing_product_keys}")
                    else:
                        self.log_test("Product Data Structure", True, f"Found {len(products)} products")
                        
                        # Test categories
                        categories = list(set([p.get('category') for p in products if p.get('category')]))
                        self.log_test("Product Categories", True, f"Found categories: {categories}")
                else:
                    self.log_test("Product Data", False, "No products found")

    def test_products_endpoint(self):
        """Test products endpoint with filtering"""
        print("\n🔍 Testing Products Endpoint...")
        
        # Test all products
        success, data = self.run_test("Get All Products", "GET", "products", 200)
        
        if success and data:
            products = data.get('products', [])
            if products:
                self.log_test("Products List", True, f"Found {len(products)} products")
                
                # Test category filtering
                if products:
                    first_category = products[0].get('category')
                    if first_category:
                        success, filtered_data = self.run_test(
                            f"Filter Products by Category", 
                            "GET", 
                            f"products?category={first_category.replace(' ', '%20')}", 
                            200
                        )
                        
                        if success and filtered_data:
                            filtered_products = filtered_data.get('products', [])
                            all_same_category = all(p.get('category') == first_category for p in filtered_products)
                            self.log_test(
                                "Category Filter Accuracy", 
                                all_same_category, 
                                f"Filtered {len(filtered_products)} products for '{first_category}'"
                            )
            else:
                self.log_test("Products List", False, "No products returned")

    def test_banners_endpoint(self):
        """Test banners endpoint"""
        print("\n🔍 Testing Banners Endpoint...")
        
        success, data = self.run_test("Get Banners", "GET", "banners", 200)
        
        if success and data:
            banners = data.get('banners', [])
            if banners:
                self.log_test("Banners List", True, f"Found {len(banners)} banners")
                
                # Check banner structure
                banner = banners[0]
                required_fields = ['id', 'title', 'subtitle', 'image']
                has_all_fields = all(field in banner for field in required_fields)
                self.log_test("Banner Structure", has_all_fields, f"Banner fields: {list(banner.keys())}")
            else:
                self.log_test("Banners List", False, "No banners returned")

    def test_enquiry_endpoints(self):
        """Test enquiry creation and retrieval"""
        print("\n🔍 Testing Enquiry Endpoints...")
        
        # Test enquiry creation
        test_enquiry = {
            "name": "Test Customer",
            "phone": "9876543210",
            "email": "test@example.com",
            "message": "Interested in Samsung TV",
            "product_name": "Samsung 32\" LED TV"
        }
        
        success, response = self.run_test("Create Enquiry", "POST", "enquiry", 200, test_enquiry)
        
        if success and response:
            # Check response structure
            required_fields = ['id', 'name', 'phone', 'message', 'created_at', 'status']
            has_all_fields = all(field in response for field in required_fields)
            self.log_test("Enquiry Response Structure", has_all_fields, f"Response fields: {list(response.keys())}")
            
            # Test enquiry retrieval
            success, enquiries = self.run_test("Get Enquiries", "GET", "enquiries", 200)
            
            if success and enquiries:
                self.log_test("Enquiries List", True, f"Found {len(enquiries)} enquiries")
                
                # Check if our test enquiry is in the list
                test_enquiry_found = any(
                    enq.get('name') == 'Test Customer' and enq.get('phone') == '9876543210' 
                    for enq in enquiries
                )
                self.log_test("Test Enquiry Persistence", test_enquiry_found, "Test enquiry found in database")
            else:
                self.log_test("Enquiries List", False, "Could not retrieve enquiries")

    def test_sheet_config_endpoints(self):
        """Test sheet configuration endpoints"""
        print("\n🔍 Testing Sheet Configuration Endpoints...")
        
        # Test get sheet config (might be empty initially)
        success, config = self.run_test("Get Sheet Config", "GET", "sheet-config", 200)
        
        if success:
            self.log_test("Sheet Config Retrieval", True, f"Config: {config}")
            
            # Test save sheet config
            test_config = {
                "sheet_url": "https://docs.google.com/spreadsheets/d/test/export?format=csv",
                "sheet_type": "products"
            }
            
            success, response = self.run_test("Save Sheet Config", "POST", "sheet-config", 200, test_config)
            
            if success:
                self.log_test("Sheet Config Save", True, "Configuration saved successfully")

    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n🔍 Testing Status Check Endpoints...")
        
        # Create a status check
        test_status = {
            "client_name": "test_client"
        }
        
        success, response = self.run_test("Create Status Check", "POST", "status", 200, test_status)
        
        if success:
            # Get status checks
            success, statuses = self.run_test("Get Status Checks", "GET", "status", 200)
            
            if success and statuses:
                self.log_test("Status Checks List", True, f"Found {len(statuses)} status checks")

    def test_cors_headers(self):
        """Test CORS headers"""
        print("\n🔍 Testing CORS Configuration...")
        
        try:
            response = requests.options(f"{self.api_url}/health", timeout=10)
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            has_cors = any(cors_headers.values())
            self.log_test("CORS Headers", has_cors, f"CORS headers: {cors_headers}")
            
        except Exception as e:
            self.log_test("CORS Headers", False, f"Error testing CORS: {str(e)}")

    def run_all_tests(self):
        """Run all test suites"""
        print("🚀 Starting MA LAKSHMI RADIO SALES & SERVICE API Tests")
        print(f"🌐 Testing API at: {self.api_url}")
        print("=" * 60)
        
        # Run all test suites
        self.test_health_endpoints()
        self.test_sheet_data_endpoint()
        self.test_products_endpoint()
        self.test_banners_endpoint()
        self.test_enquiry_endpoints()
        self.test_sheet_config_endpoints()
        self.test_status_endpoints()
        self.test_cors_headers()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        # Print failed tests
        failed_tests = [test for test in self.test_results if not test['success']]
        if failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in failed_tests:
                print(f"  - {test['test_name']}: {test['details']}")
        
        return self.tests_passed == self.tests_run

def main():
    tester = ElectronicsShowroomAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'total_tests': tester.tests_run,
            'passed_tests': tester.tests_passed,
            'success_rate': (tester.tests_passed/tester.tests_run)*100 if tester.tests_run > 0 else 0,
            'test_results': tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())