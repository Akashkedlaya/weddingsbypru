import { motion } from 'framer-motion';

const ImageGrid = () => {
  // Define the images array
  const images = [
    {
      id: 1,
      src: '/images/Sneakpeek-46.jpg',
      alt: 'Wedding photography 1',
    },
    {
      id: 2,
      src: '/images/Sneakpeek-146.jpg',
      alt: 'Wedding photography 2',
    },
    {
      id: 3,
      src: '/images/Sneakpeek-258.jpg',
      alt: 'Wedding photography 3',
    },
    {
      id: 4,
      src: '/images/samantha-gades-N1CZNuM_Fd8-unsplash.jpg',
      alt: 'Wedding photography 4',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;