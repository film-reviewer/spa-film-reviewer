

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextInput, Textarea, Button, Notification } from "@mantine/core";

const UpdateReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState(null);
  const [formData, setFormData] = useState({
    opinion: "",
    sinopsis: "",
    rating: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // URL base de Firebase 
  const BASE_URL = "https://film-reviewer-96fd6-default-rtdb.europe-west1.firebasedatabase.app";

  // Cargar datos del film
  useEffect(() => {
    fetch(`${BASE_URL}/films/${id}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar la película");
        return res.json();
      })
      .then((data) => {
        setFilm(data);
        setFormData({
          opinion: data.opinion || "",
          sinopsis: data.sinopsis || "",
          rating: data.rating || "",
        });
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar la película");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/films/${id}.json`, {
        method: "PATCH", // PATCH actualizar solo algunos campos
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al actualizar la película");

      navigate("/"); // vuelve a Home
    } catch (err) {
      setError("No se pudo actualizar la película");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error)
    return (
      <Notification color="red" title="Error">
        {error}
      </Notification>
    );
  if (!film)
    return (
      <div>
        <h2>No se encontró la película</h2>
        <Button onClick={() => navigate("/")}>Volver</Button>
      </div>
    );

  return (
    <div>
      <h2>Editar reseña: {film.titulo}</h2>

      <form onSubmit={handleSubmit}>
        <Textarea
          label="Opinión"
          name="opinion"
          value={formData.opinion}
          onChange={handleChange}
          required
          mt="sm"
        />

        <Textarea
          label="Sinopsis"
          name="sinopsis"
          value={formData.sinopsis}
          onChange={handleChange}
          required
          mt="sm"
        />

        <TextInput
          label="Nota"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          mt="sm"
        />

        <Button type="submit" color="indigo" mt="md" fullWidth>
          Guardar cambios
        </Button>
      </form>
    </div>
  );
};

export default UpdateReviewPage;
