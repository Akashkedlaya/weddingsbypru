import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackWhatsAppClick } from '../utils/analytics';


const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
const [showTooltip, setShowTooltip] = useState(false);
// handleWhatsAppClick declared below (includes tracking)


// Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Show tooltip after 3 seconds on first load
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Your WhatsApp number (without + or spaces)
    const phoneNumber = '919538939944';
    // Pre-filled message
    const message = 'Hi! I would like to inquire about wedding photography services.';
    // WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 mb-2 whitespace-nowrap"
              >
                <div className="bg-white text-gray-900 px-4 py-3 rounded-lg shadow-lg border border-gray-200 relative">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-700"
                  >
                    <X size={12} />
                  </button>
                  <p className="text-sm font-medium">
                    💬 Have questions? Chat with us!
                  </p>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors duration-300 group relative"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
            
            {/* Icon */}
            <MessageCircle size={28} className="relative z-10" fill="white" />
            
            {/* Small badge (optional - shows you're online) */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
