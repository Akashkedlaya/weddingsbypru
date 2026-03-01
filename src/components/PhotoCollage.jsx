import { motion } from 'framer-motion';

const PhotoCollage = () => {
  const photos = [
    { id: 1, image: '/images/home/collage-1.webp' },
    { id: 2, image: '/images/home/collage-2.webp' },
    { id: 3, image: '/images/home/collage-3.webp' },
    { id: 4, image: '/images/home/collage-4.webp' },
    { id: 5, image: '/images/home/collage-5.webp' },
    { id: 6, image: '/images/home/collage-6.webp' },
    { id: 7, image: '/images/home/collage-7.webp' },
    { id: 8, isText: true },
    { id: 9, image: '/images/home/collage-9.webp' },
    { id: 10, image: '/images/home/collage-10.webp' },
    { id: 11, image: '/images/home/collage-11.webp' },
    { id: 12, image: '/images/home/collage-12.webp' },
    { id: 13, image: '/images/home/collage-13.webp' },
    { id: 14, image: '/images/home/collage-14.webp' },
    { id: 15, image: '/images/home/collage-15.webp' },
  ];

  return (
    <section className="py-24 bg-[#f5f2ed]">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative aspect-square overflow-hidden group"
            >
              {photo.isText ? (
                <div className="w-full h-full bg-white flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-xs tracking-wider mb-2 text-gray-600">some of the most</p>
                    <h3 className="text-4xl md:text-5xl font-serif italic mb-2">"Beautiful"</h3>
                    <p className="text-xs tracking-wider text-gray-600">wedding images</p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={photo.image}
                    alt="Wedding photography"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
