
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextInput, Textarea, Button, Group, Title } from "@mantine/core";
import axios from "axios";
import { Link } from "react-router-dom";


function UpdateReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);

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
        setError(true);
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
        setError(true);
      });
  };

  if (error) return <p>Error al cargar los datos. Intenta de nuevo.</p>;
  if (!film) return <p>Cargando...</p>;

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "2rem" }}>

      <Title order={2} ta="center" mb="md">
        Editar película
      </Title>

      <form onSubmit={handleSubmit}>

        <TextInput
          size="lg"
          label="Título"
          placeholder="Título de la película"
          value={film.titulo || ""}
          onChange={(e) => setFilm({ ...film, titulo: e.target.value })}
        />

        <Textarea
          size="lg"
          mt="md"
          label="Opinión"
          placeholder="Tu opinión sobre la película"
          autosize
          minRows={3}
          value={film.opinion || ""}
          onChange={(e) => setFilm({ ...film, opinion: e.target.value })}
        />

        <Textarea
          size="lg"
          mt="md"
          label="Sinopsis"
          placeholder="Breve resumen de la película"
          autosize
          minRows={4}
          value={film.sinopsis || ""}
          onChange={(e) => setFilm({ ...film, sinopsis: e.target.value })}
        />

        <TextInput
          size="lg"
          mt="md"
          label="Nota / Rating"
          placeholder="Ejemplo: 8.5"
          value={film.rating || ""}
          onChange={(e) => setFilm({ ...film, rating: e.target.value })}
        />

        <Group justify="center" mt="xl">
          <Button variant="light" color="green" type="submit">
            Guardar Cambios
          </Button>
        </Group>

        <Group justify="center" mt="md">
          <Button component={Link} to="/" variant="default">
            Volver al inicio
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default UpdateReviewPage;
