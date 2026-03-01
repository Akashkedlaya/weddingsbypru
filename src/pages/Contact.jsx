import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { trackContactForm } from '../utils/analytics';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xykdnoyk', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('success');
        trackContactForm('formspree');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/contact/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              Let's create something beautiful together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-8 text-gray-900">
              Contact Information
            </h2>

            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:pruthvi@weddingsbypru.com"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    pruthvi@weddingsbypru.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919538939944"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    +91 95389 39944
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700">
                    Bangalore, Karnataka, India <br />
                    Available for destinations worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your wedding..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
