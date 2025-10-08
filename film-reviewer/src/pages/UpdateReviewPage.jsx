
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import axios from "axios";

function UpdateReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState(null);
  const BASE_URL = "https://film-reviewer-96fd6-default-rtdb.europe-west1.firebasedatabase.app";

  // utilizamos useEffect para cargar la película
  useEffect(() => {
    axios
      .get(`${BASE_URL}/films/${id}.json`) // obtenemos los datos de Firebase
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar la película:", error);
      });
  }, [id]);

  // Actualizar datos en Firebase usando Axios
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`${BASE_URL}/films/${id}.json`, film)
      .then(() => {
        navigate("/"); // redirige al home tras guardar
      })
      .catch((error) => {
        console.error("Error al actualizar la película:", error);
      });
  };

  if (!film) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Editar película</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label><strong>Título</strong></label>
          <input
            type="text"
            value={film.titulo || ""}
            onChange={(e) => setFilm({ ...film, titulo: e.target.value })}/>
        </div>

        <div>
          <label><strong>Opinión</strong></label>
          <textarea
            value={film.opinion || ""}
            onChange={(e) => setFilm({ ...film, opinion: e.target.value })}
          />
        </div>

        <div>
          <label><strong>Sinopsis</strong></label>
          <textarea
            value={film.sinopsis || ""}
            onChange={(e) => setFilm({ ...film, sinopsis: e.target.value })}/>
        </div>

        <div>
          <label><strong>Nota</strong></label>
          <input
            type="text"
            value={film.rating || ""}
            onChange={(e) => setFilm({ ...film, rating: e.target.value })}/>
        </div>

        <Button type="submit" color="indigo" fullWidth>
          Guardar cambios
        </Button>
      </form>
    </div>
  );
}

export default UpdateReviewPage;
