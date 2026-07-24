import "../styles/expertises.css";
import { Globe, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: <Globe size={42} />,
    title: "Développement Web",
    description:
      "Création de sites vitrines, plateformes web et applications sur mesure performantes.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Applications Mobiles",
    description:
      "Développement natif et cross-platform (iOS & Android) orienté performance et UX.",
  },
  {
    icon: <Search size={42} />,
    title: "SEO & Performance",
    description:
      "Optimisation technique pour les moteurs de recherche, accessibilité et performances front-end.",
  },
];

function Expertise() {
  return (
    <section className="expertise">
      <div className="container">

        <div className="section-title">
          <h1>Nos expertises</h1>
          <p>
            Nous accompagnons les entreprises dans leur transformation digitale
            grâce à des solutions modernes, performantes et évolutives.
          </p>
        </div>

        <div className="expertise-grid">
          {expertises.map((item, index) => (
            <div className="expertise-card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link to="/services">
                En savoir plus →
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Expertise;