import "../styles/AboutAgency.css";
import { CheckCircle2 } from "lucide-react";
import agencyImage from "../assets/about-agency.jpg";

function AboutAgency() {
  return (
    <section className="about-agency">
      <div className="container about-content">

        <div className="about-text">

          <span className="section-badge">Qui sommes-nous ?</span>

          <h2>Votre partenaire pour des solutions digitales performantes.</h2>

          <p>
            Alvon Digital Group est une agence spécialisée dans la création de
            sites web, d'applications mobiles et de solutions digitales sur
            mesure. Nous accompagnons les entreprises dans leur transformation
            numérique avec une approche centrée sur la qualité, la performance
            et l'expérience utilisateur.
          </p>

          <p>
            Chaque projet est pensé pour répondre aux besoins spécifiques de nos
            clients, avec des technologies modernes et une collaboration basée
            sur l'écoute et la transparence.
          </p>

          <div className="about-features">

            <div className="feature">
              <CheckCircle2 size={22} />
              <span>Solutions personnalisées</span>
            </div>

            <div className="feature">
              <CheckCircle2 size={22} />
              <span>Technologies modernes</span>
            </div>

            <div className="feature">
              <CheckCircle2 size={22} />
              <span>Accompagnement de A à Z</span>
            </div>

          </div>

        </div>

        <div className="about-image">
          <img
            src={agencyImage}
            alt="Équipe Alvon Digital Group"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutAgency;