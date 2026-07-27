import "../styles/Engagement.css";
import {
  Clock3,
  Code2,
  Gauge,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const engagements = [
  {
    icon: <Clock3 size={32} />,
    title: "Respect des délais",
    description:
      "Nous planifions chaque projet avec rigueur afin de respecter les échéances convenues.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Développement sur mesure",
    description:
      "Chaque solution est conçue selon vos besoins et vos objectifs.",
  },
  {
    icon: <Gauge size={32} />,
    title: "Performance",
    description:
      "Nous optimisons la rapidité, la fluidité et l'expérience utilisateur.",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Communication",
    description:
      "Vous êtes informé à chaque étape de l'avancement de votre projet.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Fiabilité & Sécurité",
    description:
      "Nous développons des solutions fiables en appliquant les bonnes pratiques du web.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Accompagnement",
    description:
      "Notre collaboration ne s'arrête pas à la mise en ligne de votre projet.",
  },
];

function Engagement() {
  return (
    <section className="engagement">
      <div className="container">

        <div className="engagement-header">

          <span className="section-badge">
            Notre engagement
          </span>

          <h2>
            Votre réussite est notre priorité.
          </h2>

          <p>
            Nous nous engageons à concevoir des solutions digitales
            performantes, évolutives et adaptées à vos besoins, tout en
            privilégiant une relation de confiance et un accompagnement
            personnalisé.
          </p>

        </div>

        <div className="engagement-grid">

          {engagements.map((item, index) => (
            <div className="engagement-card" key={index}>

              <div className="engagement-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Engagement;