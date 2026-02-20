import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif mb-6">Weddings by Pru</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Capturing timeless moments and creating beautiful memories. 
              Specializing in wedding photography and cinematography across India 
              and destination weddings worldwide.
            </p>
            <div className="flex space-x-4">
              
              <a
                href="https://instagram.com/weddingsbypru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              
              <a
                href="https://facebook.com/weddingsbypru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              
              <a
                href="https://youtube.com/@weddingsbypru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:pruthvi@weddingsbypru.com" className="hover:underline">
                  pruthvi@weddingsbypru.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919538939944" className="hover:underline">
                  +91 95389 39944
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/photography" className="hover:underline">Photography</Link>
              </li>
              <li>
                <Link to="/films" className="hover:underline">Films</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Weddings by Pru. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;