const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContact = (req, res, next) => {
    const {
        name,
        email,
        needType,
        message
    } = req.body;

    
    if (!name || !email || !needType || !message) {
        return res.status(400).json({
            success: false,
            message: "Tous les champs obligatoires doivent être renseignés."
        });
    }

    
    if (!emailValid.test(email)) {
        return res.status(400).json({
            success: false,
            message: "L'adresse e-mail est invalide."
        });
    }


    if (name.trim().length < 2) {
        return res.status(400).json({
            success: false,
            message: "Le nom doit contenir au moins 2 caractères."
        });
    }

   
    if (message.trim().length < 10) {
        return res.status(400).json({
            success: false,
            message: "Le message doit contenir au moins 10 caractères."
        });
    }

    next();
};

export default validateContact;