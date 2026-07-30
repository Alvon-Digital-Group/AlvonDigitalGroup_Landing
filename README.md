# Site Alvon Digital Group

## Présentation

Alvon Digital Group est un site vitrine moderne et responsive conçu pour présenter l’agence, ses services, son expertise ainsi que ses offres de contact. Le projet combine un frontend React/Vite avec un backend Node.js/Express pour gérer les formulaires de contact, les emails et l’enregistrement des demandes dans une base de données.

Le site propose plusieurs pages dédiées :
- accueil
- présentation de l’agence
- services
- formulaire de contact
- page de remerciement
- mentions légales
- politique de confidentialité

---

## Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- Font Awesome
- Lucide React

### Backend
- Node.js
- Express
- Prisma ORM
- MySQL
- Nodemailer
- CORS
- dotenv

---

## Installation

### Prérequis
- Node.js 18 ou plus
- npm
- MySQL installé et configuré

### 1. Cloner le projet
```bash
git clone <url-du-repo>
cd site-alvon-digital-group
```

### 2. Installer les dépendances du backend
```bash
cd backend
npm install
```

### 3. Configurer les variables d’environnement
Créer un fichier `.env` dans le dossier `backend` avec les informations suivantes :

```env
PORT=3000
DATABASE_URL="mysql://user:password@localhost:3306/alvon_db"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
```

### 4. Initialiser la base de données avec Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Lancer le backend
```bash
npm run dev
```

Le backend sera disponible sur :
```bash
http://localhost:3000
```

### 6. Installer et lancer le frontend
```bash
cd ../frontend
npm install
npm run dev
```

Le frontend sera disponible sur :
```bash
http://localhost:5173
```

---

## Architecture

```text
site-alvon-digital-group/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
└── README.md
```

### Structure fonctionnelle
- Le frontend contient les composants UI, les pages du site et les services d’appel à l’API.
- Le backend expose une API REST pour le formulaire de contact.
- Prisma sert de couche d’accès à la base MySQL.
- Nodemailer envoie un email au contact et une confirmation à l’utilisateur.

---

## Fonctionnalités

- Présentation complète de l’agence et de ses services
- Navigation fluide entre les différentes pages du site
- Formulaire de contact validé côté backend
- Enregistrement des demandes de contact dans une base MySQL
- Envoi d’emails automatiques pour l’agence et l’utilisateur
- Page de confirmation après soumission du formulaire
- Design responsive et moderne
- Pages légales et politiques de confidentialité intégrées

---

## Scripts utiles

### Backend
```bash
npm run dev
npm start
```

### Frontend
```bash
npm run dev
npm run build
npm run preview
```

---

## Notes

Pour un déploiement en production, il est recommandé de :
- sécuriser les variables d’environnement
- utiliser un service SMTP fiable
- configurer une base MySQL distante
- compiler le frontend avec `npm run build`
