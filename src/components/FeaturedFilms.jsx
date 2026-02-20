import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

const FeaturedFilms = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const films = [
    {
      id: 1,
      couple: 'ALBERTO & APPORVA',
      location: 'Bangalore, India',
      thumbnail: '/images/home/featured-film-1.jpg',
      youtubeId: 'srUzSJAsXyw', // Replace with your actual YouTube video ID
    },
    {
      id: 2,
      couple: 'KEVIN & ROSHINI',
      location: 'Bangalore, India',
      thumbnail: '/images/home/featured-film-2.jpg',
      youtubeId: 'xtvv8K5yjJc', // Replace with your actual YouTube video ID
    },
    {
      id: 3,
      couple: 'SRINIVAS & KAJOL',
      location: 'Bangalore, India',
      thumbnail: '/images/home/featured-film-3.jpg',
      youtubeId: 'jDZ3_hsIMJI', // Replace with your actual YouTube video ID
    },
    {
      id: 4,
      couple: 'VAIBHAV & PRAKRUTHI',
      location: 'Bangalore, India',
      thumbnail: '/images/home/featured-film-4.jpg',
      youtubeId: 'qGLzKAOMvPE', // Replace with your actual YouTube video ID
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
            HERE ARE SOME SELECTED WEDDINGS FROM PAST COUPLE OF YEARS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {films.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(film.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setPlayingVideo(film)}
            >
              <div className="absolute inset-0">
                <img
                  src={film.thumbnail}
                  alt={`${film.couple} wedding`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <p className="text-xs tracking-[0.3em] mb-4 opacity-80">
                  WEDDINGS BY PRU
                </p>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider mb-2 px-4">
                  {film.couple}
                </h3>

                <p className="text-sm tracking-wider opacity-90">
                  {film.location}
                </p>

                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: hoveredId === film.id ? 1 : 0.8,
                    opacity: hoveredId === film.id ? 1 : 0.7
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-8"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" fill="white" />
                  </div>
                </motion.div>
              </div>

              <div 
                className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                  hoveredId === film.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-6xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0`}
              title={`${playingVideo.couple} wedding film`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedFilms;
