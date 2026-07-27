import "../styles/PageHero.css";
import logo from "../assets/logo.png";

function PageHero({ title, subtitle, image }) {
    return (
        <section className="page-hero">

            <div className="page-hero-banner">

                <img
                    src={image}
                    alt={title}
                    className="page-hero-image"
                />

                <img
                    src={logo}
                    alt="Logo Alvon Digital Group"
                    className="page-hero-logo"
                />

                <div className="page-hero-overlay"></div>

            </div>

            <div className="container page-hero-content">

                <h1>{title}</h1>

                <p>{subtitle}</p>

            </div>

        </section>
    );
}

export default PageHero;