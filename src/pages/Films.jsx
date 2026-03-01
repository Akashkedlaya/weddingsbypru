import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useFilms } from '../hooks/useFilms';

const Films = () => {
  const { films, loading, error } = useFilms();
  const [playingVideo, setPlayingVideo] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading films...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex items-center justify-center">
        <p className="text-xl text-red-600">Error loading films: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Hero Section with Video */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/films/hero-bg.jpg"
        >
          <source
            src="http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/films/hero-video.mp4"
            type="video/mp4"
          />
          {/* Fallback to image if video doesn't load */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/films/hero-bg.jpg')" }}
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-wider">
              Wedding Films
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 font-light">
              Cinematic storytelling that captures the soul of your celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Films Grid - 2 Columns */}
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
            SELECTED WEDDING FILMS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Latest Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {films?.featured?.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setPlayingVideo(film)}
            >
              {/* Thumbnail - Landscape 16:9 */}
              <div className="relative aspect-video overflow-hidden mb-6 bg-gray-200">
                <img
                  src={film.thumbnailUrl}
                  alt={film.couple}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Simple Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10 transform group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Film Info */}
              <div className="px-2">
                <p className="text-xs tracking-wider text-gray-500 mb-2">
                  {film.category} • {film.date}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif mb-3 text-gray-900">
                  {film.couple} , {film.location}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                  {film.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal - Fullscreen */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 backdrop-blur-sm rounded-full p-3"
          >
            <X size={28} />
          </button>
          
          {/* Video Container */}
          <div className="w-full h-full max-w-[95vw] max-h-[90vh] flex items-center justify-center p-4">
            <div className="w-full aspect-video max-h-full">
              <iframe
                src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${playingVideo.couple} wedding film`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Film Info at Bottom */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
            <h3 className="text-xl md:text-3xl font-serif mb-2">
              {playingVideo.couple}
            </h3>
            <p className="text-sm md:text-base opacity-75">
              {playingVideo.category} • {playingVideo.location} • {playingVideo.date}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Films;
