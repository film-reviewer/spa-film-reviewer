

import FilmCard from "./FilmCard";

function FilmList({ films, onDelete }) {


  if (!films || films.length === 0) {
    return <p>No hay películas para mostrar</p>
  }


  return (
    <div className="film-list">
      { films.map((film) => <FilmCard key={film.id} film={film} onDelete={onDelete}  />) }
    </div>
  );
}

export default FilmList;
