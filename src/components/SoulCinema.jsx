import { motion } from 'framer-motion';

const SoulCinema = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#f5f2ed]">
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-[120%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('/images/home/soul-cinema-bg.jpg')`,
            transform: 'skewY(-3deg)',
            transformOrigin: 'top left',
            filter: 'grayscale(100%)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-7xl md:text-8xl font-serif mb-8 tracking-wider">
            SOUL+CINEMA
          </h2>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            Every wedding is unique and so are our films. For past 8 years we have set new benchmarks of 
            storytelling within wedding realm and beyond. We are fortunate to have experienced so unique 
            cultures and traditions across 25 countries and to document stories that continuously overwhelm us.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 mt-20 text-center"
      >
        <h3 className="text-4xl font-serif text-gray-800">AWARD WINNING FILMS</h3>
      </motion.div>
    </section>
  );
};

export default SoulCinema;
