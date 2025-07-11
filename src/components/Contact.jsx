import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would be connected to an actual form submission service in production
    console.log(formData);
    alert('Thanks for your message! We\'ll be in touch soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      restaurantName: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-50 to-white py-10 sm:py-20">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about Serve? We're here to help. Contact us today to learn how we can transform your restaurant operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-3 py-4 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-primary-50 p-4 rounded-xl mr-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <FiMail className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:hello@servepos.com" className="text-gray-600 hover:text-primary-500 transition-colors duration-300">
                    hello@servepos.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-primary-50 p-4 rounded-xl mr-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <FiPhone className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+18001234567" className="text-gray-600 hover:text-primary-500 transition-colors duration-300">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-primary-50 p-4 rounded-xl mr-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <FiMapPin className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                  <address className="text-gray-600 not-italic">
                    123 Innovation Way<br />San Francisco, CA 94103
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Demo</h4>
              <p className="text-gray-600 mb-6">See Serve in action and learn how it can be customized for your restaurant's specific needs.</p>
              <button className="btn btn-primary bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Book a Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-3 py-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                    placeholder="Your Restaurant"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;