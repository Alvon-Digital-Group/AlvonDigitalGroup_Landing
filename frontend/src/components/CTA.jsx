import "../styles/CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <div className="container">

        <h2>Prêt à donner vie à votre projet ?</h2>

        <p>
          Discutons ensemble de vos besoins et créons une solution
          digitale adaptée à votre entreprise.
        </p>

        <Link to="/contact" className="cta-button">
          Demander un devis
        </Link>

      </div>
    </section>
  );
}

export default CTA;