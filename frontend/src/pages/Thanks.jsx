import { Link } from "react-router-dom";
import "../styles/Thanks.css";
import { CircleCheckBig } from "lucide-react";

function Thanks() {
  return (
    <section className="thank-you">
      <div className="container">

        <div className="thank-you-card">

          <div className="success-icon">
            <CircleCheckBig size={45} strokeWidth={2.5} />
          </div>

          <h1>Merci pour votre demande !</h1>

          <p>
            Nous avons bien reçu votre message.
            Notre équipe vous répondra dans les meilleurs délais.
          </p>

          <Link to="/" className="btn-home">
            Retour à l'accueil
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Thanks;