import Hero from '../components/Hero';
import PhotoCollage from '../components/PhotoCollage';
import SoulCinema from '../components/SoulCinema';
import GalleryPreview from '../components/GalleryPreview';
import FeaturedFilms from '../components/FeaturedFilms';

const Home = () => {
  return (
    <div>
      <Hero />
      <PhotoCollage />
      <SoulCinema />
      <GalleryPreview />
      <FeaturedFilms />
    </div>
  );
};

export default Home;
