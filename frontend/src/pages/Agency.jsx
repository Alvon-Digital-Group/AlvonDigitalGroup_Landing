import PageHero from "../components/PageHero.jsx";
import agencyHero from "../assets/agency-hero.jpg";
import CTA from "../components/CTA.jsx";
import AboutAgency from "../components/AboutAgency.jsx";
import Vision from "../components/Vision.jsx";
import Engagement from "../components/Engagement.jsx";

function Agency() {
  return (
    <>
      <PageHero
        title="Une agence web engagée dans la réussite de vos projets."
        subtitle="Découvrez notre vision, nos valeurs et notre façon d'accompagner chaque client."
        image={agencyHero}
      />
      <AboutAgency />
      <Vision />
      <Engagement />
      <CTA />

    </>
  );
}

export default Agency;