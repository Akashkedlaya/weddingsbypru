import { motion } from 'framer-motion';

const PreWeddingGallery = () => {
  const images = [
    '/images/photography/prewedding-1.jpg',
    '/images/photography/prewedding-2.jpg',
    '/images/photography/prewedding-3.jpg',
    '/images/photography/prewedding-4.jpg',
    '/images/photography/prewedding-5.jpg',
    '/images/photography/prewedding-6.jpg',
    '/images/photography/prewedding-7.jpg',
    '/images/photography/prewedding-8.jpg',
    '/images/photography/prewedding-9.jpg',
    '/images/photography/prewedding-10.jpg',
    '/images/photography/prewedding-11.jpg',
    '/images/photography/prewedding-12.jpg',
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f5f2ed] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Pre-Weddings</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your love story before the big day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src={image}
                alt={`Pre-wedding ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreWeddingGallery;
