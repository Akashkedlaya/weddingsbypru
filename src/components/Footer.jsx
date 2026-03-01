import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <img
              src="/images/logo-white.png"
              alt="Weddings by Pru"
              className="h-12 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Capturing timeless wedding moments with cinematic storytelling.
              Based in Bangalore, serving couples across India and worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/photography" className="hover:text-white transition-colors">Photography</Link></li>
              <li><Link to="/films" className="hover:text-white transition-colors">Films</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:pruthvi@weddingsbypru.com"
                  onClick={trackEmailClick}
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  pruthvi@weddingsbypru.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919538939944"
                  onClick={trackPhoneClick}
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  +91 95389 39944
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">

              <a
                href="https://instagram.com/weddingsbypru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://youtube.com/@weddingsbypru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Weddings by Pru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
