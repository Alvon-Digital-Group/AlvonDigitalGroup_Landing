import PageHero from "../components/PageHero.jsx";
import servicesHero from "../assets/services-hero.jpg";


function Services() {
  return (
  <>
  <PageHero
    title="Des solutions digitales adaptées à votre entreprise."
    subtitle="Sites web, applications mobiles et optimisation SEO."
    image={servicesHero}
/>

</>
  );
}

export default Services;