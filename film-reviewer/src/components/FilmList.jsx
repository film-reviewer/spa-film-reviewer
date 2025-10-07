

import FilmCard from "./FilmCard";

function FilmList({ films }) {
  return (
    <div className="film-list">
    {/* verificamos que films tenga mas de 0 elementos, sino mostramos texto */}
      {films && films.length > 0 ? (
        films.map((film) => <FilmCard key={film.id} film={film} />)
      ) : (
        <p>No hay películas para mostrar</p>
      )}
    </div>
  );
}

export default FilmList;