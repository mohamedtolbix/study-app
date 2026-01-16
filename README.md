# 📘 Plateforme pédagogique OFPPT – Examens & Cours

## 🌐 Démonstration en ligne (Demo)

Une version de démonstration de l’application est disponible en ligne afin de permettre aux stagiaires et formateurs de tester les fonctionnalités sans installer le projet en local.

👉 **Accéder au site de démonstration :**  
[demo](https://facebook.com)

### Objectif de la démo
La version de démonstration permet de :
- 📚 Consulter les **cours** par filière et module  
- 📝 Accéder aux **examens** ( CC, EFM, EFF)  
- 📄 Ouvrir et télécharger les fichiers **PDF** directement  
- 🎓 Aider les stagiaires OFPPT à **préparer leurs examens** plus facilement  

## 🧾 Présentation du projet

Ce projet est une **application web pédagogique** développée dans le cadre d’un **projet de fin de formation OFPPT**.

L’objectif principal est de **faciliter l’accès aux examens (EFM, EFF, CC)** et aux **supports de cours** pour les stagiaires de l’OFPPT, afin de :

- Gagner du temps dans la recherche des examens
- Centraliser les ressources pédagogiques
- Aider les stagiaires à mieux se préparer aux évaluations
- Améliorer l’autonomie dans l’apprentissage

Cette plateforme est destinée principalement aux **stagiaires OFPPT**, mais peut également être utile aux **formateurs**.

---


## 🎯 Objectifs pédagogiques

- Mettre en pratique les compétences acquises en **React.js**
- Consommer une **API REST**
- Gérer la navigation avec **React Router**
- Manipuler des données dynamiques (filières, modules, examens)
- Télécharger et consulter des fichiers PDF
- Créer une application claire, ergonomique et utile

---

## 🧩 Fonctionnalités principales

### ✅ Navigation hiérarchique

L’utilisateur peut naviguer de manière simple et logique :

1. Années de formation
2. Filières
3. Modules
4. Ressources pédagogiques

---

### 📂 Ressources disponibles

Pour chaque module ou filière, l’application permet d’accéder à :

- 📘 **Cours** (PDF)
- 📝 **Contrôles continus (CC)**
- 📄 **Examens de fin de module (EFM)**
- 🏁 **Examens de fin de formation (EFF)**

Chaque ressource est affichée sous forme de carte avec :
- Titre
- Description
- Bouton de téléchargement

---

### ⬇️ Téléchargement des fichiers

Les fichiers sont fournis via une API et stockés publiquement.

👉 Lorsqu’un utilisateur clique sur le bouton **Télécharger**, le fichier PDF est directement téléchargé depuis le serveur.

📌 **Exemple de lien utilisé** :
```
https://podo.b1.ma/storage/effs/eff2024.pdf
```

> ℹ️ Les liens des fichiers sont générés dynamiquement à partir de la propriété `file_path` retournée par l’API.

---

### 🌙 Mode sombre / mode clair

L’utilisateur peut activer ou désactiver le **mode sombre** pour améliorer le confort visuel.

---

## 🛠️ Technologies utilisées

### Frontend
- ⚛️ **React.js**
- 📦 React Hooks (`useState`, `useEffect`, `useCallback`)
- 🧭 React Router DOM
- 🎨 Bootstrap / CSS

### Backend (API)
- 🔗 API REST fournie
- 🌐 Endpoints publics


### Outils
- 🧰 Git & GitHub
- 🧪 Navigateur (Chrome / Firefox)

---

## 🔌 API utilisée

L’application consomme plusieurs endpoints API.

### Exemple : Récupérer les EFF par filière

```
GET https://podo.b1.ma/api/public/filieres/{filiere_id}/effs
```

### Réponse JSON :
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "EFF 2024",
      "file_path": "/storage/effs/eff2024.pdf"
    }
  ]
}
```

---

## 📁 Structure du projet

```
edu-react/
│
├── src/
│   ├── components/
│   │   ├── ExamsPage.jsx
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── contexts/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   └── App.jsx
│
├── public/
├── package.json
└── README.md
```

---

## 🚀 Installation et lancement

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/VOTRE-USERNAME/edu-react.git
cd edu-react
```

👉 **Remplacez ce lien par le lien de votre dépôt GitHub**.

---

### 2️⃣ Installer les dépendances

```bash
npm install
```

---

### 3️⃣ Lancer l’application

```bash
npm start
```

ou avec Vite :
```bash
npm run dev
```

---

## 👨‍🎓 Public cible

Ce projet est destiné à :

- 🎓 Stagiaires de l’OFPPT
- 📚 Étudiants souhaitant réviser rapidement
- 🧑‍🏫 Formateurs

Il permet de **trouver rapidement les examens** et de **se préparer efficacement** aux évaluations.

---

## 🏫 Contexte OFPPT

Ce projet a été réalisé dans un cadre **pédagogique** afin de :

- Valider les compétences techniques
- Répondre à un besoin réel des stagiaires
- Proposer une solution utile et évolutive

---

## 🔮 Améliorations possibles

- Authentification utilisateur
- Historique des téléchargements
- Recherche avancée par mot-clé
- Ajout de vidéos pédagogiques
- Version mobile

---

## 👤 Auteur

- **Nom** : *MOHAMED TOLBIX*
- **Filière** : Développement Digital OPTION WEP FULL STACK
- **Établissement** : OFPPT
- **Année** : 2025 / 2026

---

## 📜 Licence

Projet à usage pédagogique.

© OFPPT – Tous droits réservés.

