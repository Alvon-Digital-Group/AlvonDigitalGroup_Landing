import "../styles/WhyChoose.css";
import { CheckCircle2 } from "lucide-react";
import illustration from "../assets/why-choose.jpg";

const avantages = [
    {
        title: "Développement sur mesure",
        description:
            "Chaque projet est conçu selon vos objectifs, sans solution générique.",
    },
    {
        title: "Performance & SEO",
        description:
            "Des sites rapides, optimisés pour le référencement et les Core Web Vitals.",
    },
    {
        title: "Responsive Design",
        description:
            "Une expérience fluide sur smartphone, tablette et ordinateur.",
    },
    {
        title: "Accompagnement personnalisé",
        description:
            "Nous vous accompagnons de l'analyse jusqu'à la mise en ligne en passant par la conception, le développement et les tests.",
    },
];

function WhyChoose() {
    return (
        <section className="why-choose">
            <div className="container">

                <div className="section-title">
                    <h1>Pourquoi choisir Alvon Digital Group ?</h1>

                    <p>
                        Nous créons des solutions digitales pensées pour durer, avec une
                        attention particulière portée à la qualité, aux performances et à
                        l'accompagnement de nos clients.
                    </p>
                </div>

                <div className="why-content">

                    <div className="why-image">
                        <img
                            src={illustration}
                            alt="Illustration développement web"
                        />
                    </div>

                    <div className="why-list">

                        {avantages.map((item, index) => (
                            <div className="why-item" key={index}>

                                <div className="why-icon">
                                    <CheckCircle2 size={26} />
                                </div>

                                <div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhyChoose;