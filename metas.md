

 FASE 1 — Setup & Base del proyecto (Día 1)

Objetivo: Tener el proyecto creado, conectado con Firebase y renderizando datos básicos en pantalla.

✅ Tareas:

 []Commit inicial con el setup en VS Code (crear proyecto con Vite o CRA, inicializar repo).

 []Configurar Firebase (crear proyecto y conectar SDK).

 []Crear base de datos (colección reviews o filmsReviews).

 []Configurar la API externa (por ejemplo, TMDB o Fake Movie API).

 []Crear estructura de carpetas (/pages, /components, /services, /context, etc.).

 []Añadir React Router y definir rutas base:

       -/ → HomePage

       -/details/:id → DetailsPage

       -/new → NewReviewPage

       -/update/:id → UpdateReviewPage

       -* → ErrorPage



🟡 FASE 2 — Páginas y componentes core (Día 2)

Objetivo: Tener todas las páginas creadas y renderizando la información mínima.

✅ Tareas:

  [] HomePage → mostrar lista de películas desde API externa.

    - [] Componente FilmList (render de tarjetas).

    - [] Componente FilmCard (título, imagen, botón de detalles).

    - [] Añadir Link para navegar al DetailsPage.

 [] DetailsPage → mostrar info extra + reseña de usuario.

    [] Componente FilmDetails (título, sinopsis, imagen, autor, rating, etc.).

    [] Añadir botón “Editar reseña” → va a /update/:id.

    [] Añadir botón “Eliminar” → abre DeleteNotification.

 [] NewReviewPage → formulario con campos básicos (película, reseña, rating, autor, fecha vista).

 [] UpdateReviewPage → reutilizar formulario pero con los datos cargados desde Firebase.

 [] ErrorPage → mostrar mensaje 404 simple.


🔵 FASE 3 — Funcionalidades CRUD (Día 3)

 Objetivo: Tener el sistema de reseñas completo y funcional con Firebase.

✅ Tareas:

 [] Crear servicio Firebase (services/firebase.js) con funciones:

    - []createReview()

    - []getReviews()

    - []updateReview()

    - []deleteReview()

 [] Conectar las funciones con los formularios (crear, editar, eliminar).

 [] Añadir confirmación con DeleteNotification (pop-up). 

 [] Añadir Toast Notification (librería como Mantine o React Hot Toast).

 [] Añadir LoadingSpinner durante las peticiones.

🟣 FASE 4 — Responsive Design + UX (Día 4)

Objetivo: Que se vea y funcione bien en móvil y escritorio.

✅ Tareas:

 [] Navbar responsive (logo + buscador + login).

 [] Footer con links o créditos (buscar ideas).

 [] Adaptar grid/listado de pelis a pantallas pequeñas.

 [] Testear que todos los botones y rutas sean accesibles desde mobile.


🟠 FASE 5 — BONUS / Mejora visual (si hay tiempo)

Objetivo: Añadir features que destaquen el proyecto para el portfolio.

✅ Tareas extra (si llegan a tiempo):

 [] Firebase Auth (Login/Register con email o Google).

 [] Estadísticas de usuario (cantidad de reseñas, promedio de puntuaciones).

 [] Deploy en Firebase Hosting.

 [] Favs o Watchlist (guardar películas favoritas).

 [] Modo oscuro.

🚀 MVP mínimo entregable (revisar antes del miércoles)

Antes del 9/10/2025 deben tener funcionando:

✅ HomePage con lista de películas (API externa).
✅ DetailsPage con info + reseñas del usuario.
✅ CRUD completo (crear, leer, actualizar, eliminar reseñas).
✅ Responsive funcional en mobile y desktop.
