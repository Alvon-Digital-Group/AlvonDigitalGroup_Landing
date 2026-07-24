import "../styles/hero.css";
import heroImage from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-banner">

        <img
          src={heroImage}
          alt="Développement web"
          className="hero-image"
        />

        <img
          src={logo}
          alt="Logo Alvon Digital Group"
          className="hero-logo"
        />

      </div>

      <div className="container hero-text">

        <h1>
          Nous développons des expériences digitales qui propulsent votre entreprise.
        </h1>

        <p>
          Sites web, applications mobiles et optimisation SEO conçus pour offrir
          performance, visibilité et une expérience utilisateur de qualité.
        </p>

        <div className="hero-buttons">

          <Link to="/services" className="btn-primary">
            Découvrir nos services
          </Link>

          <Link to="/contact" className="btn-secondary">
            Nous contacter
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;