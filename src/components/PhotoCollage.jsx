import { motion } from 'framer-motion';

const PhotoCollage = () => {
  const quotes = [
    { text: "Photography is the story I fail to put into words", author: "Destin Sparks" },
    { text: "In photography there is a reality so subtle that it becomes more real than reality", author: "Alfred Stieglitz" },
    { text: "A photograph is a secret about a secret", author: "Diane Arbus" },
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const photos = [
    { id: 1, image: '/images/home/collage-1.jpg' },
    { id: 2, image: '/images/home/collage-2.jpg' },
    { id: 3, image: '/images/home/collage-3.jpg' },
    { id: 4, image: '/images/home/collage-4.jpg' },
    { id: 5, image: '/images/home/collage-5.jpg' },
    { id: 6, image: '/images/home/collage-6.jpg' },
    { id: 7, image: '/images/home/collage-7.jpg' },
    { id: 8, isText: true },
    { id: 9, image: '/images/home/collage-9.jpg' },
    { id: 10, image: '/images/home/collage-10.jpg' },
    { id: 11, image: '/images/home/collage-11.jpg' },
    { id: 12, image: '/images/home/collage-12.jpg' },
    { id: 13, image: '/images/home/collage-13.jpg' },
    { id: 14, image: '/images/home/collage-14.jpg' },
    { id: 15, image: '/images/home/collage-15.jpg' },
  ];

  return (
    <section className="py-16 bg-[#f5f2ed]">
      {/* Full width, no side padding */}
      <div className="max-w-full mx-auto px-2">
        {/* No gap between images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
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
