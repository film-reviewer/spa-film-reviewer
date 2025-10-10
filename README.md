

# 🎬 SPA Film Reviewer

## 📖 Descripción

**SPA Film Reviewer** es una aplicación web desarrollada con **React** que permite crear, editar y eliminar reseñas de películas.  
El proyecto utiliza **Firebase Realtime Database** como base de datos y **Mantine UI** como biblioteca de componentes.  

En esta aplicación puedes:
- Ver una lista de películas con su información básica.  
- Consultar los detalles de cada película.  
- Crear una nueva reseña personalizada.  
- Editar y eliminar reseñas existentes.  
- Disfrutar de un diseño responsive adaptado a escritorio y dispositivos móviles.

---

## ⚙️ Instrucciones para ejecutar el proyecto en tu ordenador

### 1. Clonar el repositorio

git clone https://github.com/film-reviewer/spa-film-reviewer
cd spa-film-reviewer

### 2. Instalar dependencias

npm install

### 3. Ejectur la aplicación

npm run dev 

Esto iniciará el servidor de desarrollo.
Por defecto, la aplicación estará disponible en:
Ejemplo: http://localhost:5173

### 🚀 Demo

Puedes acceder a la versión desplegada del proyecto aquí:
👉https://film-reviewer.netlify.app/

### 🛠️ Tecnologías utilizadas

- React + Vite

- Firebase Realtime Database

- Axios

- Mantine UI

- React Router DOM

- HTML5 + CSS3 (diseño responsive)


### 📂 Estructura del Proyecto

film-reviewer/
│
├── public/
├── src/
│   ├── assets/                  # Imágenes y recursos
│   ├── components/              # Componentes reutilizables
│   │   ├── FilmCard.jsx
│   │   ├── FilmList.jsx
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   ├── pages/                   # Vistas principales
│   │   ├── HomePage.jsx
│   │   ├── NewReviewPage.jsx
│   │   ├── UpdateReviewPage.jsx
│   │   ├── DetailsPage.jsx
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── BaseUrl.js
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
