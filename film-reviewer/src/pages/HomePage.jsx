import React, { useEffect, useState } from "react";
import FilmList from "../components/FilmList";
import { BASE_URL } from "../BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { notifications } from "@mantine/notifications";

function HomePage() {
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(BASE_URL + "/films.json")
      .then((response) => {
        const filmsObj = response.data;
        const filmsArr = Object.keys(filmsObj).map((id) => ({
          id,
          ...filmsObj[id],
        }));
        setFilms(filmsArr);
      })
      .catch((error) => {
        console.log("No hay películas para mostrar...", error);
      });
  }, []);

  const deleteFilm = (id) => {
    axios
      .delete(`${BASE_URL}/films/${id}.json`)
      .then(() => {
        notifications.show({
          title: "Reseña eliminada",
          message: "Tu reseña se ha eliminado correctamente 🎬",
          color: "red",
        });
        setFilms((prev) => prev.filter((film) => film.id !== id));
      })
      .catch((error) => console.error("Error al eliminar película", error));
  };

  const detailsPage = (id) => navigate(`/details/${id}`);

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        ></div>

        <FilmList films={films} onDelete={deleteFilm} onDetails={detailsPage} />
      </div>
    </>
  );
}

export default HomePage;
