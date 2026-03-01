import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '../utils/analytics';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Page Title - Mobile Only */}
          <div className="lg:hidden text-center mb-8">
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-2">
              MEET THE FOUNDER
            </p>
            <h1 className="text-4xl font-serif text-gray-900">
              Pruthvi Sheshadri Kedlaya
            </h1>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Left - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <img
                  src="http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/about/founder.jpg"
                  alt="Founder - Weddings by Pru"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-xl lg:pl-8">

                {/* Desktop Title */}
                <div className="hidden lg:block">
                  <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
                    MEET THE FOUNDER
                  </p>
                  <h1 className="text-5xl md:text-6xl font-serif mb-8 text-gray-900">
                    Pruthvi Sheshadri Kedlaya
                  </h1>
                </div>

                {/* Bio */}
                <div className="space-y-6 text-gray-700 leading-relaxed mt-6 lg:mt-0">
                  <p className="text-lg">
                    I’m Pruthvi, a Chartered Accountant who traded balance sheets for beautiful, 
                    enduring stories.
                    </p>

                  <p>
                    Weddings are not merely events; they are once-in-a-lifetime celebrations of legacy, emotion, 
                    and timeless love. Every glance, every quiet tear, every fleeting smile carries a depth that deserves 
                    to be preserved with intention and artistry.
                    </p>

                   <p>  
                    My approach is rooted in elegance and authenticity. I believe in capturing moments as they naturally 
                    unfold, refined, graceful, and emotionally rich transforming them into heirloom memories that will
                    be cherished for generations.
                    </p>

                    <p>
                    Based in Bangalore and available for destinations worldwide, I embrace the grandeur, the rituals, the
                    culture, and the intimacy that define every celebration. From lavish destination affairs to intimate ceremonies,
                    each wedding is treated as a masterpiece in the making.
                        </p>

                    <p> 
                    Because your story deserves nothing less than timeless excellence.
                  </p>

                
                </div>

                {/* Contact Info with Tracking */}
                <div className="mt-12 pt-8 border-t border-gray-300">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Get in Touch
                  </h3>

                  <div className="space-y-3">

                    <a
                      href="mailto:pruthvi@weddingsbypru.com"
                      onClick={trackEmailClick}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Mail size={18} className="mr-3" />
                      pruthvi@weddingsbypru.com
                    </a>

                    <a
                      href="tel:+919538939944"
                      onClick={trackPhoneClick}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Phone size={18} className="mr-3" />
                      +91 95389 39944
                    </a>

                    <a
                      href="https://instagram.com/weddingsbypru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Instagram size={18} className="mr-3" />
                      @weddingsbypru
                    </a>

                    <a
                      href="https://instagram.com/pruthvi.sheshadri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Instagram size={18} className="mr-3" />
                      @pruthvi.sheshadri
                    </a>

                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Let's Connect
                  </a>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
