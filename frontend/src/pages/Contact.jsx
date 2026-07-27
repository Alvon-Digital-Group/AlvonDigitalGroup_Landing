import PageHero from "../components/PageHero";
import contactHero from "../assets/contact-hero.jpg";

function Contact() {
  return (
    <>
      <PageHero
        title="Contactez-nous pour discuter de votre projet."
        subtitle="Nous sommes là pour répondre à vos questions et vous accompagner dans la réalisation de vos idées."
        image={contactHero}
      />
    </>
  );
}

export default Contact;