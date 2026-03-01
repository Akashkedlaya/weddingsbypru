import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const categories = [
    {
      id: 1,
      title: 'Traditional',
      image: '/images/home/gallery-preview-1.webp',
      description: 'Classic ceremonies',
    },
    {
      id: 2,
      title: 'Destination',
      image: '/images/home/gallery-preview-2.webp',
      description: 'Exotic locations',
    },
    {
      id: 3,
      title: 'Pre-Wedding',
      image: '/images/home/gallery-preview-3.webp',
      description: 'Love stories',
    },
    {
      id: 4,
      title: 'Candid',
      image: '/images/home/gallery-preview-4.webp',
      description: 'Real moments',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Explore Our Photography
          </h2>
          <p className="text-gray-600">
            Browse through our diverse collection of wedding moments
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden group rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif mb-1">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/photography"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
