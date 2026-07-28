import PageHero from "../components/PageHero.jsx";
import servicesHero from "../assets/services-hero.jpg";
import CTA from "../components/CTA.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import ServicesIntro from "../components/ServicesIntro.jsx";

import webImage from "../assets/web-development.jpg";
import mobileImage from "../assets/mobile-development.jpg";
import seoImage from "../assets/seo-optimization.jpg";


function Services() {
  return (
  <>
  <PageHero
    title="Des solutions digitales adaptées à votre entreprise."
    subtitle="Sites web, applications mobiles et optimisation SEO."
    image={servicesHero}
/>

<ServicesIntro />

<ServiceSection
        title="Développement Web"
        description="Nous concevons des sites internet modernes, performants et évolutifs, adaptés aux besoins de votre entreprise. Chaque projet est développé avec une attention particulière portée à l'expérience utilisateur, à la rapidité d'affichage et au référencement naturel."
        image={webImage}
        features={[
          "Sites vitrines",
          "Applications web",
          "Interfaces d'administration",
          "Responsive Design",
          "Optimisation SEO",
          "Maintenance évolutive",
        ]}
      />

      <ServiceSection
        title="Applications Mobiles"
        description="Nous développons des applications mobiles intuitives et performantes pour iOS et Android. Nos solutions sont pensées pour offrir une expérience utilisateur fluide tout en répondant aux besoins spécifiques de votre activité."
        image={mobileImage}
        reverse={true}
        features={[
          "Applications iOS",
          "Applications Android",
          "Développement cross-platform",
          "UX/UI optimisée",
          "Performances élevées",
          "Maintenance & évolutions",
        ]}
      />

      <ServiceSection
        title="SEO & Performance"
        description="Nous optimisons votre présence en ligne grâce à un référencement naturel efficace, des performances techniques élevées et une architecture pensée pour les moteurs de recherche comme pour les utilisateurs."
        image={seoImage}
        features={[
          "SEO technique",
          "Optimisation du contenu",
          "Mots-clés et stratégie de contenu",
          "Accessibilité",
          "Temps de chargement optimisé",
          "Structure HTML sémantique",
        ]}
      />

      <CTA />
    </>
  );
}

export default Services;