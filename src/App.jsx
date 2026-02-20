import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Films from './pages/Films';
import About from './pages/About';
import Contact from './pages/Contact';
import Traditional from './pages/Traditional';
import Destination from './pages/Destination';
import PreWedding from './pages/PreWedding';
import Candid from './pages/Candid';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/films" element={<Films />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/traditional" element={<Traditional />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/prewedding" element={<PreWedding />} />
            <Route path="/candid" element={<Candid />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
