import "../styles/Navbar.css";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">

        <NavLink to="/" className="logo-container" onClick={closeMenu}>
          <img
            src={logo}
            alt="Logo Alvon Digital Group"
            className="logo-image"
          />

          <h1 className="logo">
            Alvon Digital Group
          </h1>
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>

          <NavLink to="/agence" onClick={closeMenu}>
            L'Agence
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="btn-contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
