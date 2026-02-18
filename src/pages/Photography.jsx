import Hero from '../components/Hero'
import ImageGrid from '../components/ImageGrid'
import Footer from '../components/Footer'
import { getImageUrl } from '../config/images'

function Photography() {
  const portfolioImages = [
    {
      src: getImageUrl('Sneakpeek-46.jpg'),
      alt: 'Portfolio 1',
      title: 'Sarah & Michael',
    },
    {
      src: getImageUrl('Sneakpeek-146.jpg'),
      alt: 'Portfolio 2',
      title: 'Emma & James',
    },
    {
      src: getImageUrl('Sneakpeek-258.jpg'),
      alt: 'Portfolio 3',
      title: 'Priya & Raj',
    },
  ]

  return (
    <>
      <Hero 
        title="Photography" 
        subtitle="Timeless wedding photography"
        image={getImageUrl('Sneakpeek-146.jpg')}
      />
      <section className="py-20">
        <div className="container mx-auto">
          <ImageGrid images={portfolioImages} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Photography