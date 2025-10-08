

import { Button } from "@mantine/core";
import { Link } from "react-router-dom";


function FilmCard({ film, onDelete}) {
  return (
    <div className="film-card">
      <img src={film.imagen} alt={film.title} />
      <h3>{film.titulo}</h3>
      <p><strong>Opinion:</strong> {film.opinion}</p>
      <p><strong>Sinopsis:</strong> {film.sinopsis}</p>en
      <p><strong>Nota:</strong> {film.rating}</p>
      <p>{film.autor}</p>
      <Link to={`/details/${film.id}`}>
        <Button color="orange"> Ver detalles</Button>
      </Link>

      <Button variant="outline" color="red" onClick={() => onDelete(film.id)}>Delete</Button>

      <Link to={`/update/${film.id}`}>
        <Button color="indigo">Edit</Button>
      </Link>

    </div>
  );
}

export default FilmCard;