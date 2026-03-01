import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWeddings } from '../hooks/useWeddings';

const WeddingGallery = () => {
  const { weddingId } = useParams();
  const location = useLocation();
  const { weddings, loading } = useWeddings();

  // Get wedding info from location state or find in weddings data
  const weddingInfo = location.state?.wedding || 
    Object.values(weddings || {})
      .flat()
      .find(w => w.id === weddingId);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading gallery...</p>
      </div>
    );
  }

  if (!weddingInfo) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Gallery not found</h2>
          <Link to="/photography" className="text-gray-600 hover:text-gray-900">
            ← Back to Photography
          </Link>
        </div>
      </div>
    );
  }

  // Generate image array with WebP format
  const images = Array.from(
    { length: weddingInfo.imageCount }, 
    (_, i) => `http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/photography/${weddingInfo.folder}/${i + 1}.webp`
  );

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Header - FIX 1: Center Aligned + FIX 2: Add top padding to clear navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24 md:pt-8">
          <Link 
            to="/photography"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Photography
          </Link>
          
          {/* Center Aligned Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-3">
              {weddingInfo.couple}
            </h1>
            <p className="text-gray-600 mb-2">
              {weddingInfo.location}
            </p>
            {weddingInfo.description && (
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                {weddingInfo.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid - FIX 3: Natural aspect ratios (masonry-style) */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-lg mb-4 break-inside-avoid"
            >
              <img
                src={image}
                alt={`${weddingInfo.couple} ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingGallery;
