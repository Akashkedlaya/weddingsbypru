import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { MapPin, Phone, Mail } from 'lucide-react';

const Bangalore = () => {
  return (
    <>
      <SEO 
        title="Best Wedding Photographer in Bangalore | Candid & Pre-Wedding Photography"
        description="Top-rated wedding photographer in Bangalore. Specializing in candid wedding photography, pre-wedding shoots, and cinematic films. 200+ weddings covered across Karnataka. Book now!"
        keywords="wedding photographer bangalore, candid wedding photographer bangalore, pre wedding photographer bangalore, best wedding photography bangalore, bangalore wedding cinematography, destination wedding photographer bangalore"
        url="https://weddingsbypru.com/bangalore-wedding-photographer"
      />

      <div className="min-h-screen bg-[#f5f2ed]">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/locations/bangalore-hero.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-4">
                Wedding Photographer in Bangalore
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Capturing Beautiful Moments Across the Garden City
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-serif mb-6 text-gray-900">
                Premier Wedding Photography Services in Bangalore
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Looking for the <strong>best wedding photographer in Bangalore</strong>? Weddings by Pru 
                  brings over 8 years of experience capturing stunning weddings across Bangalore, from 
                  traditional Kannada ceremonies to modern destination celebrations.
                </p>

                <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">
                  Our Bangalore Wedding Photography Services
                </h3>
                
                <ul className="space-y-3 list-disc list-inside">
                  <li><strong>Candid Wedding Photography:</strong> Natural, unposed moments that tell your unique story</li>
                  <li><strong>Pre-Wedding Shoots:</strong> Romantic sessions at Bangalore's most beautiful locations</li>
                  <li><strong>Traditional Wedding Photography:</strong> South Indian, North Indian, and fusion weddings</li>
                  <li><strong>Cinematic Wedding Films:</strong> Award-winning videography and storytelling</li>
                  <li><strong>Destination Weddings:</strong> Coverage at palaces, resorts, and venues across Karnataka</li>
                </ul>

                <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">
                  Popular Wedding Venues We Cover in Bangalore
                </h3>
                
                <p>
                  We have extensive experience photographing weddings at Bangalore's finest venues including:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
                  <li>Taj West End</li>
                  <li>The Leela Palace</li>
                  <li>ITC Gardenia</li>
                  <li>Sheraton Grand</li>
                  <li>Bangalore Palace</li>
                  <li>Nandi Hills</li>
                  <li>Jayamahal Palace</li>
                  <li>Windflower Resort & Spa</li>
                </ul>

                <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">
                  Why Choose Weddings by Pru in Bangalore?
                </h3>
                
                <ul className="space-y-3 list-disc list-inside">
                  <li><strong>Local Expertise:</strong> Deep knowledge of Bangalore's best photography spots</li>
                  <li><strong>Award-Winning Team:</strong> Featured in WedMeGood, Vogue Weddings</li>
                  <li><strong>200+ Weddings:</strong> Extensive experience across all wedding styles</li>
                  <li><strong>Cinematic Quality:</strong> Film-style storytelling and editing</li>
                  <li><strong>Full Coverage:</strong> From engagement to reception, we capture it all</li>
                </ul>

                <h3 className="text-2xl font-serif text-gray-900 mt-8 mb-4">
                  Bangalore Pre-Wedding Photography Locations
                </h3>
                
                <p>
                  Our favorite spots for <strong>pre-wedding shoots in Bangalore</strong>:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
                  <li>Lalbagh Botanical Garden</li>
                  <li>Cubbon Park</li>
                  <li>Nandi Hills (sunrise shoots)</li>
                  <li>Bangalore Palace grounds</li>
                  <li>Ulsoor Lake</li>
                  <li>Hesaraghatta Lake</li>
                  <li>Ramanagara (adventure couples)</li>
                  <li>Innovative Film City</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-white rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-serif mb-4 text-gray-900">
                  Ready to Book Your Bangalore Wedding Photography?
                </h3>
                <p className="text-gray-600 mb-6">
                  Limited slots available for 2026-2027 wedding season
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6 sticky top-24">
                <h3 className="text-xl font-serif mb-6 text-gray-900">Contact Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gray-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600 text-sm">
                        Bangalore & Surrounding Areas<br />
                        Available for destination weddings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="text-gray-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+919538939944" className="text-gray-600 text-sm hover:text-gray-900">
                        +91 95389 39944
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="text-gray-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:pruthvi@weddingsbypru.com" className="text-gray-600 text-sm hover:text-gray-900">
                        pruthvi@weddingsbypru.com
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full mt-6 px-6 py-3 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Popular Searches */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Popular Searches
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Candid wedding photographer Bangalore</li>
                  <li>• Pre wedding photographer Bangalore</li>
                  <li>• Best wedding photographer Bangalore</li>
                  <li>• Destination wedding photographer Karnataka</li>
                  <li>• Wedding videographer Bangalore</li>
                  <li>• Affordable wedding photography Bangalore</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-900">
              Our Bangalore Wedding Portfolio
            </h2>
            <Link
              to="/photography"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bangalore;
