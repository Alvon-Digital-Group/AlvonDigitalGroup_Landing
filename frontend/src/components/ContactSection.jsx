import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendContact } from "../services/contactService.js";

import "../styles/ContactSection.css";

function ContactSection() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        needType: "",
        budget: "À définir",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            setLoading(true);
            setError("");

            await sendContact(formData);

            setFormData({
                name: "",
                company: "",
                email: "",
                needType: "",
                budget: "À définir",
                message: "",
            });

            navigate("/merci");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Une erreur est survenue."
            );

        } finally {

            setLoading(false);

        }
    };
    return (
        <section className="contact-section">
            <div className="container contact-container">

                <div className="contact-form">

                    <h2>Parlons de votre projet</h2>

                    <p>
                        Remplissez le formulaire ci-dessous. Nous vous répondrons dans les
                        meilleurs délais.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Nom *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Entreprise</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Votre entreprise"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contact@email.fr"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Type de besoin *</label>
                                <select
                                    name="needType"
                                    value={formData.needType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Choisissez...</option>
                                    <option value="Développement Web">Développement Web</option>
                                    <option value="Application Mobile">Application Mobile</option>
                                    <option value="SEO & Performance">SEO & Performance</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Budget estimé</label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="À définir">À définir</option>
                                <option value="Moins de 1 000 €">Moins de 1 000 €</option>
                                <option value="1 000 € - 3 000 €">1 000 € - 3 000 €</option>
                                <option value="3 000 € - 5 000 €">3 000 € - 5 000 €</option>
                                <option value="Plus de 5 000 €">Plus de 5 000 €</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message *</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Décrivez votre projet..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={loading}
                        >
                            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                        </button>

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}

                    </form>

                </div>

            </div>
        </section>
    );
}

export default ContactSection;