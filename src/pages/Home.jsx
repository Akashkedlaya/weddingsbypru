import Hero from '../components/Hero'
import ImageGrid from '../components/ImageGrid'
import Footer from '../components/Footer'
import { getImageUrl } from '../config/images'

function Home() {
  const featuredWork = [
    {
      src: getImageUrl('Sneakpeek-46.jpg'),
      alt: 'Wedding 1',
      title: 'Elegant Garden Wedding',
    },
    {
      src: getImageUrl('Sneakpeek-146.jpg'),
      alt: 'Wedding 2',
      title: 'Beach Sunset Ceremony',
    },
    {
      src: getImageUrl('Sneakpeek-258.jpg'),
      alt: 'Wedding 3',
      title: 'Mountain Romance',
    },
  ]

  return (
    <>
      <Hero
        title="Weddings by Pru"
        subtitle="Capturing timeless moments of love and celebration"
        image={getImageUrl('Sneakpeek-46.jpg')}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">
            Featured Work
          </h2>
          <ImageGrid images={featuredWork} />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home