import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with The Saffron Table for any inquiries, feedback, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="text-yellow-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    The Saffron Table<br />
                    123 Koramangala 4th Block<br />
                    Bengaluru, Karnataka 560034<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="text-yellow-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    Reservations: +91 98765 43210<br />
                    General Inquiries: +91 98765 43211<br />
                    Events & Catering: +91 98765 43212
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="text-yellow-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    General: info@saffrontable.com<br />
                    Reservations: reservations@saffrontable.com<br />
                    Events: events@saffrontable.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="text-yellow-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Monday - Thursday:</strong> 12:00 PM - 11:00 PM</p>
                    <p><strong>Friday - Sunday:</strong> 12:00 PM - 12:00 AM</p>
                    <p className="text-sm text-yellow-600 mt-2">
                      *Kitchen closes 30 minutes before closing time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us</h3>
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Koramangala, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif text-gray-800 mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="events">Private Events & Catering</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please share your message, questions, or feedback..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-8 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Private Events</h3>
              <p className="text-gray-600">
                Planning a special celebration? We offer private dining rooms and customized menus for your special events.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Catering</h3>
              <p className="text-gray-600">
                Elevate your business meetings and corporate events with our premium catering services.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Gift Cards</h3>
              <p className="text-gray-600">
                Share the gift of exceptional dining with our restaurant gift cards, perfect for any occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;