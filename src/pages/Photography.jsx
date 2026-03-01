import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWeddings } from '../hooks/useWeddings';

const Photography = () => {
  const { weddings, loading, error } = useWeddings();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading galleries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <p className="text-xl text-red-600">Error loading galleries: {error}</p>
      </div>
    );
  }

  const PhotoSection = ({ title, description, weddingData }) => (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-3">{title}</h2>
        {description && <p className="text-gray-600 text-lg">{description}</p>}
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {weddingData.map((wedding, index) => (
          <Link
            key={wedding.id}
            to={`/gallery/${wedding.id}`}
            state={{ wedding }}
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={wedding.thumbnail}
                alt={wedding.couple}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                title === 'Weddings' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {wedding.category && (
                    <p className="text-xs tracking-wider mb-1 opacity-90">
                      {wedding.category} • {wedding.date}
                    </p>
                  )}
                  <h3 className="text-lg font-serif leading-tight">
                    {wedding.couple}
                  </h3>
                  {wedding.location && title === 'Weddings' && (
                    <p className="text-xs opacity-75 mt-1">{wedding.location}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Hero Section - Smaller on Mobile */}
      <section className="relative h-[60vh] md:h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/photography/hero-bg.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif mb-4 md:mb-6">Photography</h1>
            <p className="text-base md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Every wedding tells a unique story. Through our lens, we capture the emotions, 
              traditions, and timeless moments that make your celebration extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {weddings?.prewedding && (
          <PhotoSection
            title="Pre-Weddings"
            description="Your love story before the big day"
            weddingData={weddings.prewedding}
          />
        )}

        {weddings?.haldi && (
          <PhotoSection
            title="Haldi"
            description="Traditional rituals filled with joy and color"
            weddingData={weddings.haldi}
          />
        )}

        {weddings?.sangeet && (
          <PhotoSection
            title="Sangeet"
            description="Vibrant celebrations and dance"
            weddingData={weddings.sangeet}
          />
        )}

        {weddings?.wedding && (
          <PhotoSection
            title="Weddings"
            description="The sacred moments of your special day"
            weddingData={weddings.wedding}
          />
        )}
      </div>
    </div>
  );
};

export default Photography;
