import { sendContactEmails } from "../services/emailService.js";

export const createContact = async (req, res) => {
  try {
    const { name, company, email, needType, budget, message } = req.body;

    const contact = {
      name,
      company,
      email,
      needType,
      budget,
      message,
    };

    sendContactEmails(contact);

    return res.status(201).json({
      success: true,
      message:
        "Votre demande a bien été enregistrée. Nous la traitons et vous répondrons rapidement.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Erreur serveur.",
    });
  }
};
