import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Films from './pages/Films';
import About from './pages/About';
import Contact from './pages/Contact';
import WeddingGallery from './pages/WeddingGallery';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/films" element={<Films />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery/:weddingId" element={<WeddingGallery />} />
          </Routes>
        </main>
        <Footer />
        
        {/* WhatsApp Button - Shows on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
