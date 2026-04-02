import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/helpers';
import { PHONE_NUMBER, SHOP_ADDRESS } from '../data/demoData';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

// Google Maps embed URL - from official Google Maps embed
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.132459716541!2d88.30614187557119!3d22.611528279463972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882a0a5845135%3A0x919b8994e5b71b61!2sMA%20LAKSHMI%20RADIO%20SALES%20%26%20SERVICE!5e0!3m2!1sen!2sin!4v1775048654891!5m2!1sen!2sin";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/tfHTirDav9zsWEvX9";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form via WhatsApp (no backend required)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    // Create WhatsApp message with form data
    const whatsappMessage = `*New Enquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}` : ''}
*Message:* ${formData.message}`;

    // Open WhatsApp with the message
    const whatsappUrl = getWhatsAppUrl(whatsappMessage);
    window.open(whatsappUrl, '_blank');
    
    // Show success and reset form
    setSubmitStatus('success');
    setFormData({ name: '', phone: '', email: '', message: '' });
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section 
      id="contact"
      data-testid="contact-section"
      className="py-12 sm:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Visit Our Store
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Experience our products in person or reach out for any enquiry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map & Contact Info */}
          <div>
            {/* Map Embed */}
            <div className="aspect-[16/9] lg:aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
              <iframe
                title="MA LAKSHMI RADIO SALES & SERVICE Location"
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Open in Google Maps Link */}
            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium mb-6 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                    <p className="text-sm text-slate-600">{SHOP_ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                    <a 
                      href={getPhoneUrl()} 
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-sm text-slate-600">Mon - Sat: 10AM - 9PM</p>
                    <p className="text-sm text-slate-600">Sunday: 11AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Service Area</h4>
                    <p className="text-sm text-slate-600">Howrah, Kolkata & Suburbs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-slate-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill the form below and send via WhatsApp
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  data-testid="contact-name-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  data-testid="contact-phone-input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  data-testid="contact-email-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  data-testid="contact-message-input"
                  placeholder="What product or service are you interested in?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm">
                  WhatsApp opened! Please send the message to complete your enquiry.
                </div>
              )}

              <Button
                type="submit"
                data-testid="contact-submit-btn"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 btn-press"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Send via WhatsApp
              </Button>
            </form>

            {/* Quick WhatsApp */}
            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-500 mb-3">Or chat with us directly</p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-colors btn-press"
              >
                <Phone className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
