

import { Button } from "@mantine/core";
import { Link } from "react-router-dom";


function FilmCard({ film, onDelete, onDetails }) {
  return (
    <div className="film-card">
      <img src={film.imagen} alt={film.title} />
      <h3>{film.titulo}</h3>
      <p><strong>Nota:</strong> {film.rating}</p>
      <p>{film.autor}</p>
      <Link to={`/details/${film.id}`}>
        <Button color="orange" onClick={() => onDetails(film.id)}> Ver detalles</Button>
      </Link>

      <Button variant="outline" color="red" onClick={() => onDelete(film.id)}>Delete</Button>

      <Link to={`/update/${film.id}`}>
        <Button color="indigo">Edit</Button>
      </Link>

    </div>
  );
}

export default FilmCard;