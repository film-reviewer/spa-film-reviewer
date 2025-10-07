

import { Link } from "react-router-dom";

function FilmCard({ film }) {
  return (
    <div className="film-card">
      <img src={film.imagen} alt={film.title} />
      <h3>{film.titulo}</h3>
      <p>{film.sinopsis}</p>
      <p>{film.rating}</p>
      <p>{film.opinion}</p>
      <p>{film.autor}</p>
      <Link to={`/details/${film.id}`}>Ver detalles</Link>
    </div>
  );
}

export default FilmCard;