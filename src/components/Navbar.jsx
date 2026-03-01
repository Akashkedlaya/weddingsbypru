import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showWhiteBg = !isHomePage || isScrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Photography', path: '/photography' },
    { name: 'Films', path: '/films' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhiteBg ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {showWhiteBg ? (
            <img
              src="/images/logo.png"
              alt="Weddings by Pru"
              className="h-12 md:h-14 transition-all duration-300"
            />
          ) : (
            <img
              src="/images/logo-white.png"
              alt="Weddings by Pru"
              className="h-14 md:h-16 transition-all duration-300"
            />
          )}
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-wider transition-colors ${
                location.pathname === link.path
                  ? showWhiteBg
                    ? 'text-gray-900 font-semibold'
                    : 'text-white font-semibold'
                  : showWhiteBg
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${showWhiteBg ? 'text-gray-900' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f5f2ed] shadow-lg border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
