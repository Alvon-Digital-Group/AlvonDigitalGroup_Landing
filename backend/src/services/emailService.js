import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS are missing. Generate a Gmail app password and set them in the .env file.",
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendContactEmail = async (contact) => {
  const transporter = createTransporter();

  const mailOptions = {
    attachments: [
      {
        filename: "logo.png",
        path: path.join(__dirname, "../../assets/logo2.png"),
        cid: "logoAlvon",
      },
    ],
    from: `"Site Alvon Digital Group" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Nouvelle demande de contact",
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:40px;background:#f4f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:white;border-radius:15px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">
<div style="text-align:center;margin-bottom:20px;">
    <img
        src="cid:logoAlvon"
        alt="Alvon Digital Group"
        style="width:140px;"
    />
</div>
<tr>
<td style="background:linear-gradient(135deg,#38BDF8,#A855F7);padding:30px;text-align:center;">

<h1 style="margin:0;color:white;">
Nouvelle demande de contact
</h1>

</td>
</tr>

<tr>
<td style="padding:40px;">

<p>Une nouvelle demande vient d'être envoyée depuis le site.</p>

<table width="100%" cellpadding="10" cellspacing="0">

<tr>
<td><strong>Nom</strong></td>
<td>${contact.name}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Entreprise</strong></td>
<td>${contact.company || "Non renseignée"}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${contact.email}</td>
</tr>

<tr style="background:#f7f7f7;">
<td><strong>Besoin</strong></td>
<td>${contact.needType}</td>
</tr>

<tr>
<td><strong>Budget</strong></td>
<td>${contact.budget || "Non renseigné"}</td>
</tr>

</table>

<h3 style="margin-top:35px;">
Message
</h3>

<div style="
background:#f8f9fb;
padding:20px;
border-left:5px solid #38BDF8;
border-radius:8px;
line-height:1.7;
">
${contact.message}
</div>

</td>
</tr>

<tr>
<td style="
background:#fafafa;
text-align:center;
padding:25px;
font-size:13px;
color:#777;
">

Alvon Digital Group • Développement Web • Mobile • SEO

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendConfirmationEmail = async (contact) => {
  const transporter = createTransporter();

  const mailOptions = {
    attachments: [
      {
        filename: "logo.png",
        path: path.join(__dirname, "../../assets/logo2.png"),
        cid: "logoAlvon",
      },
    ],
    from: `"Alvon Digital Group" <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: "Nous avons bien reçu votre demande",
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:40px;background:#f4f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<div style="text-align:center;margin-bottom:20px;">
    <img
        src="cid:logoAlvon"
        alt="Alvon Digital Group"
        style="width:140px;"
    />
</div>

<table width="650" cellpadding="0" cellspacing="0" style="
background:white;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.08);
">

<tr>

<td style="
background:linear-gradient(135deg,#38BDF8,#A855F7);
padding:35px;
text-align:center;
">

<h1 style="margin:0;color:white;">
Merci pour votre demande !
</h1>

</td>

</tr>

<tr>

<td style="padding:45px;">

<p>Bonjour <strong>${contact.name}</strong>,</p>

<p>

Nous vous remercions de nous avoir contactés.

Votre demande a bien été reçue par notre équipe.

</p>

<p>

Nous reviendrons vers vous dans les meilleurs délais afin d'échanger sur votre projet.

</p>

<div style="
margin:35px 0;
padding:25px;
background:#f7f9fc;
border-left:5px solid #A855F7;
border-radius:8px;
">

<strong>Récapitulatif</strong>

<ul style="line-height:1.8;padding-left:20px;">

<li><strong>Type de besoin :</strong> ${contact.needType}</li>

<li><strong>Budget :</strong> ${contact.budget || "Non renseigné"}</li>

</ul>

</div>

<p>

Nous avons hâte de collaborer avec vous.

</p>

<p>

L'équipe <strong>Alvon Digital Group</strong>

</p>

</td>

</tr>

<tr>

<td style="
background:#fafafa;
padding:25px;
text-align:center;
font-size:13px;
color:#777;
">

© ${new Date().getFullYear()} Alvon Digital Group

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
  };

  await transporter.sendMail(mailOptions);
};
