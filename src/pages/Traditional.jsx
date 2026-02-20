import { motion } from 'framer-motion';

const Traditional = () => {
  const images = [
    '/images/photography/traditional-1.jpg',
    '/images/photography/traditional-2.jpg',
    '/images/photography/traditional-3.jpg',
    '/images/photography/traditional-4.jpg',
    '/images/photography/traditional-5.jpg',
    '/images/photography/traditional-6.jpg',
    '/images/photography/traditional-7.jpg',
    '/images/photography/traditional-8.jpg',
  ];

  return (
    <div className="pt-24 pb-16 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif mb-4">Traditional Weddings</h1>
          <p className="text-gray-600 text-lg">
            Celebrating timeless rituals and cultural heritage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src={image}
                alt={`Traditional wedding ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traditional;
