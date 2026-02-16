import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Weddings by Pru</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/films">Films</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
