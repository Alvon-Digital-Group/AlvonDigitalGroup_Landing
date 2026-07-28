import "../styles//ServiceSection.css";
import { CheckCircle2 } from "lucide-react";

function ServiceSection({
  title,
  description,
  image,
  features,
  reverse = false,
}) {
  return (
    <section className="service-section">
      <div
        className={`container service-content ${
          reverse ? "reverse" : ""
        }`}
      >
        <div className="service-text">

          <h2 className="section-badge">{title}</h2>

          <p>{description}</p>

          <div className="service-features">
            {features.map((feature, index) => (
              <div className="service-feature" key={index}>
                <CheckCircle2 size={22} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;