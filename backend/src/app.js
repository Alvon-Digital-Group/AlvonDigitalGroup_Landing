import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("API Alvon Digital Group opérationnelle");
});



app.use("/api/contact", contactRoutes);



app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route introuvable."
    });
});

export default app;