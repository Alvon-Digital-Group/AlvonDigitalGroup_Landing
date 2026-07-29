import "../styles/LegalSection.css";

function LegalSection({ title, children }) {
  return (
    <section className="legal-section">
      <div className="container">

        <div className="legal-card">

          <h2>{title}</h2>

          <div className="legal-content">
            {children}
          </div>

        </div>

      </div>
    </section>
  );
}

export default LegalSection;