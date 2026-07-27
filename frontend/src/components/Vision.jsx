import "../styles/Vision.css";
import {
  Lightbulb,
  ShieldCheck,
  Handshake,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={34} />,
    title: "Innovation",
    description:
      "Nous privilégions des technologies modernes et des solutions évolutives pour accompagner durablement nos clients.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Qualité",
    description:
      "Chaque projet est développé avec rigueur, en respectant les bonnes pratiques et les standards du web.",
  },
  {
    icon: <Handshake size={34} />,
    title: "Accompagnement",
    description:
      "Nous collaborons avec nos clients à chaque étape afin de construire une solution adaptée à leurs objectifs.",
  },
  {
    icon: <Rocket size={34} />,
    title: "Performance",
    description:
      "Nous concevons des sites rapides, accessibles et optimisés pour offrir la meilleure expérience utilisateur.",
  },
];

function Vision() {
  return (
    <section className="vision">
      <div className="container">

        <div className="vision-header">
          <span className="section-badge">Notre vision</span>

          <h2>Concevoir des solutions digitales qui créent de la valeur.</h2>

          <p>
            Chez Alvon Digital Group, nous pensons qu'un projet réussi repose
            sur une combinaison d'expertise technique, d'écoute et d'innovation.
            Notre ambition est de développer des solutions performantes,
            évolutives et centrées sur les besoins de chaque client.
          </p>
        </div>

        <div className="vision-grid">
          {values.map((value, index) => (
            <div className="vision-card" key={index}>
              <div className="vision-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Vision;