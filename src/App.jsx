import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Photography from "./pages/Photography"
import Films from "./pages/Films"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/films" element={<Films />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
