import React from 'react';
import { 
  Truck, 
  Wrench, 
  UserCheck, 
  Snowflake, 
  Shield, 
  Building,
  MessageCircle 
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

const iconMap = {
  'Truck': Truck,
  'Wrench': Wrench,
  'UserCheck': UserCheck,
  'Snowflake': Snowflake,
  'Shield': Shield,
  'Building': Building
};

const ServicesSection = ({ services = [] }) => {
  const defaultServices = [
    {
      id: "srv-1",
      title: "Home Delivery",
      description: "Free delivery within Howrah & Kolkata for orders above ₹5000",
      icon: "Truck"
    },
    {
      id: "srv-2",
      title: "Free Installation",
      description: "Expert installation for ACs, TVs & major appliances",
      icon: "Wrench"
    },
    {
      id: "srv-3",
      title: "Technician Support",
      description: "Certified technicians for repairs & maintenance",
      icon: "UserCheck"
    },
    {
      id: "srv-4",
      title: "AC Servicing",
      description: "Gas refilling, cleaning & annual maintenance contracts",
      icon: "Snowflake"
    },
    {
      id: "srv-5",
      title: "Warranty Support",
      description: "Hassle-free warranty claims & extended warranty options",
      icon: "Shield"
    },
    {
      id: "srv-6",
      title: "Bulk Orders",
      description: "Special pricing for corporate & bulk purchases",
      icon: "Building"
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section 
      data-testid="services-section"
      className="py-12 sm:py-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl mx-auto">
            Complete electronics solutions under one roof - from purchase to installation and after-sales support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Shield;
            
            return (
              <div
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppUrl(`Hello, I need ${service.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`service-enquire-${service.id}`}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
