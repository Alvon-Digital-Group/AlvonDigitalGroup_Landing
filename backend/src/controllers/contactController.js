import prisma from "../config/prisma.js";
import {
    sendContactEmail,
    sendConfirmationEmail,
} from "../services/emailService.js";

export const createContact = async (req, res) => {
    try {
        const {
            name,
            company,
            email,
            needType,
            budget,
            message,
        } = req.body;

        const contact = await prisma.contact.create({
            data: {
                name,
                company,
                email,
                needType,
                budget,
                message,
            },
        });

        await sendContactEmail(contact);
        await sendConfirmationEmail(contact);

        return res.status(201).json({
            success: true,
            message: "Votre demande a bien été enregistrée.",
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