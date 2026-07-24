import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        <img src="/logo.png" alt="Logo" className="logo-image" />

        <h2 className="logo">
          Alvon Digital Group
        </h2>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/agence">L'Agence</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
