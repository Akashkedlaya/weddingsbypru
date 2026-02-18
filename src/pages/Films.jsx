import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { getImageUrl } from '../config/images'

function Films() {
  const films = [
    {
      title: 'Sarah & Michael - A Love Story',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: getImageUrl('Sneakpeek-46.jpg'),
    },
    {
      title: 'Emma & James - Garden Wedding',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: getImageUrl('Sneakpeek-146.jpg'),
    },
  ]

  return (
    <>
      <Hero 
        title="Wedding Films" 
        subtitle="Cinematic wedding storytelling"
        image={getImageUrl('Sneakpeek-258.jpg')}
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {films.map((film, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{film.title}</h3>
                  <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                    Watch Film
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Films