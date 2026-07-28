import "../styles/ContactSection.css";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

function ContactSection() {
    return (
        <section className="contact-section">
            <div className="container contact-container">

                <div className="contact-form">

                    <h2>Parlons de votre projet</h2>

                    <p>
                        Remplissez le formulaire ci-dessous. Nous vous répondrons dans les
                        meilleurs délais.
                    </p>

                    <form>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Nom *</label>
                                <input type="text" placeholder="Votre nom" required />
                            </div>

                            <div className="form-group">
                                <label>Entreprise</label>
                                <input type="text" placeholder="Votre entreprise" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" placeholder="contact@email.fr" required />
                            </div>

                            <div className="form-group">
                                <label>Type de besoin *</label>
                                <select required>
                                    <option value="">Choisissez...</option>
                                    <option>Développement Web</option>
                                    <option>Application Mobile</option>
                                    <option>SEO & Performance</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Budget estimé</label>
                            <select>
                                <option>À définir</option>
                                <option>Moins de 1 000 €</option>
                                <option>1 000 € - 3 000 €</option>
                                <option>3 000 € - 5 000 €</option>
                                <option>Plus de 5 000 €</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message *</label>
                            <textarea rows="5" placeholder="Décrivez votre projet..." required />
                        </div>

                        <button type="submit" className="submit-btn">
                            Envoyer ma demande
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default ContactSection;