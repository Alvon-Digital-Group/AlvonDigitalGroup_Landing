import PageHero from "../components/PageHero";
import LegalSection from "../components/LegalSection";

import privacyHero from "../assets/privacy-hero.jpg";

function PolitiqueConfidentialite() {
    return (
        <>
            <PageHero
                title="Politique de confidentialité"
                subtitle="Informations sur la protection des données personnelles."
                image={privacyHero}
            />

            <LegalSection title="Introduction">
                <p>
                    La présente politique de confidentialité a pour objectif d'informer les
                    utilisateurs du site Alvon Digital Group sur la manière dont leurs données
                    personnelles sont collectées, utilisées, conservées et protégées.
                </p>

                <p>
                    Alvon Digital Group s'engage à respecter les dispositions du Règlement
                    Général sur la Protection des Données (RGPD) ainsi que la législation
                    française en vigueur relative à la protection des données personnelles.
                </p>
            </LegalSection>

            <LegalSection title="Données collectées">
                <p>
                    Dans le cadre de l'utilisation du formulaire de contact, nous sommes amenés
                    à collecter ces informations :
                </p>

                <ul>
                    <li>Nom</li>
                    <li>Nom de l'entreprise (facultatif)</li>
                    <li>Adresse e-mail</li>
                    <li>Type de besoin</li>
                    <li>Budget estimé (facultatif)</li>
                    <li>Message</li>
                </ul>

                <p>
                    Aucune donnée sensible n'est collectée via le site.
                </p>
            </LegalSection>

            <LegalSection title="Finalités du traitement">
                <p>
                    Les données collectées sont utilisées uniquement pour :
                </p>

                <ul>
                    <li>Répondre aux demandes envoyées via le formulaire de contact.</li>
                    <li>Échanger avec les prospects concernant leur projet.</li>
                    <li>Assurer le suivi des demandes commerciales.</li>
                    <li>Améliorer la qualité de nos services.</li>
                </ul>
            </LegalSection>

            <LegalSection title="Base légale">
                <p>
                    Le traitement des données repose sur le consentement de l'utilisateur lors
                    de l'envoi du formulaire de contact, ainsi que sur l'intérêt légitime
                    d'Alvon Digital Group à répondre aux demandes reçues.
                </p>
            </LegalSection>

            <LegalSection title="Durée de conservation des données">
                <p>
                    Les données personnelles sont conservées uniquement pendant la durée
                    nécessaire au traitement de la demande et au suivi commercial éventuel.
                </p>

                <p>
                    Elles sont ensuite supprimées ou archivées conformément aux obligations
                    légales applicables.
                </p>
            </LegalSection>

            <LegalSection title="Destinataires des données">
                <p>
                    Les données collectées sont exclusivement destinées à Alvon Digital Group.
                </p>

                <p>
                    Elles ne sont ni vendues, ni louées, ni cédées à des tiers, sauf obligation
                    légale ou demande émanant d'une autorité compétente.
                </p>
            </LegalSection>

            <LegalSection title="Sécurité">
                <p>
                    Alvon Digital Group met en œuvre les mesures techniques et organisationnelles
                    nécessaires afin de protéger les données personnelles contre toute perte,
                    altération, divulgation ou accès non autorisé.
                </p>

                <p>
                    Les échanges entre le navigateur de l'utilisateur et le site sont sécurisés
                    grâce au protocole HTTPS.
                </p>
            </LegalSection>

            <LegalSection title="Droits des utilisateurs (RGPD)">
                <p>
                    Conformément au RGPD, chaque utilisateur dispose des droits suivants :
                </p>

                <ul>
                    <li>Droit d'accès à ses données.</li>
                    <li>Droit de rectification.</li>
                    <li>Droit à l'effacement.</li>
                    <li>Droit à la limitation du traitement.</li>
                    <li>Droit d'opposition.</li>
                    <li>Droit à la portabilité des données.</li>
                </ul>

                <p>
                    Toute demande peut être adressée par e-mail à l'adresse de contact de
                    l'agence.
                </p>
            </LegalSection>

            <LegalSection title="Contact">
                <p>
                    Pour toute question concernant cette politique de confidentialité ou
                    l'exercice de vos droits relatifs à vos données personnelles, vous pouvez
                    nous contacter à l'adresse suivante :
                </p>

                <p>
                    <strong>Email :</strong> serviceclient@alvondigitalgroup.com
                </p>

                <p>
                    <strong>Adresse :</strong> 165 rue Becquerel, 59500 Douai, France
                </p>
            </LegalSection>

        </>
    );
}

export default PolitiqueConfidentialite;