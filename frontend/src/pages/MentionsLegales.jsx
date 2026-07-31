import PageHero from "../components/PageHero";
import LegalSection from "../components/LegalSection";

import legalHero from "../assets/legal-hero.jpg";

function MentionsLegales() {
    return (
        <>
            <PageHero
                title="Mentions légales"
                subtitle="Informations légales relatives au site Alvon Digital Group."
                image={legalHero}
            />

            <LegalSection title="Éditeur du site">
                <p>
                    Le présent site est édité par <strong>Alvon Digital Group</strong>,
                    agence spécialisée dans le développement de solutions numériques sur mesure,
                    notamment la création de sites web, d'applications mobiles et
                    l'optimisation de la visibilité en ligne.
                </p>

                <p>Statut juridique : SAS, société par actions simplifiée</p>

                <p>
                    Siège social : 165 rue Becquerel, 59500 Douai, France
                </p>

                <p>
                    Email : serviceclient@alvondigitalgroup.com
                </p>

                <p>
                    Numéro SIRET : 103 919 999 00013
                </p>
            </LegalSection>

            <LegalSection title="Hébergement">
                <p>
                    Le site est hébergé par un prestataire d'hébergement garantissant la
                    disponibilité, la sécurité et la confidentialité des données.
                </p>

                <p>
                    Hébergeur : AMEN
                </p>

                <p>
                    Adresse : 200 rue de la Croix Nivert, 75015 Paris, France
                </p>

                <p>
                    Site web : Amen.fr
                </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
                <p>
                    L'ensemble des contenus présents sur ce site (textes, images, logos,
                    illustrations, icônes, éléments graphiques et code source) est protégé
                    par le droit de la propriété intellectuelle.
                </p>

                <p>
                    Toute reproduction, représentation, modification ou diffusion, totale ou
                    partielle, sans autorisation préalable écrite d'Alvon Digital Group est
                    interdite.
                </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
                <p>
                    Alvon Digital Group met tout en œuvre afin de fournir des informations
                    exactes et régulièrement mises à jour sur ce site.
                </p>

                <p>
                    Toutefois, l'agence ne peut garantir l'absence d'erreurs, d'omissions ou
                    d'interruptions de service et ne pourra être tenue responsable des
                    conséquences liées à l'utilisation des informations publiées.
                </p>
            </LegalSection>

            <LegalSection title="Données personnelles">
                <p>
                    Les informations recueillies via le formulaire de contact sont utilisées
                    uniquement dans le cadre du traitement des demandes des utilisateurs.
                </p>

                <p>
                    Pour en savoir plus sur la collecte et le traitement de vos données,
                    consultez notre Politique de confidentialité.
                </p>
            </LegalSection>

        </>
    );
}

export default MentionsLegales;