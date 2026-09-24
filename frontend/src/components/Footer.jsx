import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>Alvon Digital Group</h2>

          <p>
            Nous accompagnons les entreprises dans la création de solutions
            digitales performantes et sur mesure.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <MapPin size={18} />
            <a
              href="https://www.google.com/maps/search/165+Rue+Becquerel,+59500+Douai"
              target="_blank"
              rel="noopener noreferrer"
            >
              165 Rue Becquerel
              <br />
              59500 Douai, France
            </a>
          </p>

          <p>
            <Phone size={18} />
            <a href="tel:+33679647609">06 79 64 76 09</a>
          </p>

          <p>
            <Mail size={18} />
            <a href="mailto:services.client.alvongroup@gmail.com">
              services.client.alvongroup@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-links">
          <h3>Informations</h3>

          <Link to="/mentions-legales">Mentions légales</Link>

          <Link to="/politique-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Alvon Digital Group — Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
