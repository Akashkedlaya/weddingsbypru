import { motion } from 'framer-motion';

const SoulCinema = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden my-8 md:my-16">
      <div 
        className="absolute inset-0 bg-cover bg-center transform -skew-y-1 scale-105"
        style={{ 
          backgroundImage: "url('/images/home/soul-cinema-bg.webp')",
          filter: 'grayscale(100%)'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'transform' }}
          className="text-center"
        >
          {/* Main Title - Better Mobile Wrapping */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 tracking-[0.1em] md:tracking-[0.15em] leading-tight px-4">
            <span className="block">REAL-MOMENTS,</span>
            <span className="block">ARTFULLY-TOLD.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xs md:text-sm tracking-[0.3em] opacity-80 mb-10 md:mb-12 uppercase">
            Award Winning Films
          </p>

          {/* Description Text - Better Mobile Wrapping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light px-2 sm:px-4">
              Every wedding is unique and so are our films. For past 8 years we have set new 
              benchmarks of storytelling within wedding realm and beyond. We are fortunate to 
              have experienced so unique cultures and traditions across India and to document 
              stories that continuously overwhelm us.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoulCinema;
