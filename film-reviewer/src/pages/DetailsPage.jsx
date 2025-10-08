import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../BaseUrl";
import { Card, Image, Text, Title, Group, Button, Rating } from "@mantine/core";

function DetailsPage() {
  const { id } = useParams(); // obtiene el ID desde la URL
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/films/${id}.json`)
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los detalles de la película:", error);
      });
  }, [id]);

  if (!film) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h2>Cargando detalles...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        withBorder
        style={{ maxWidth: 600 }}
      >
        <Card.Section>
          <Image src={film.imagen} alt={film.titulo} height={400} fit="cover" />
        </Card.Section>

        <Title order={2} mt="md" mb="sm" align="center">
          {film.titulo}
        </Title>

        <Group position="center" mb="sm">
          <Text size="sm" color="dimmed">
            Autor: <strong>{film.autor}</strong>
          </Text>
        </Group>

        <Group position="center" mb="sm">
          <Rating
            value={Number(film.rating) / 2}
            readOnly
            fractions={4}
            size="lg"
          />
          <Text>({film.rating}/10)</Text>
        </Group>

        <Text size="sm" mb="md">
          <strong>Sinopsis:</strong> {film.sinopsis}
        </Text>

        <Text italic color="gray" mb="lg">
          "{film.opinion}"
        </Text>

        <Group position="center">
          <Link to="/">
            <Button color="orange" variant="light">
              Volver al inicio
            </Button>
          </Link>
        </Group>
      </Card>
    </div>
  );
}

export default DetailsPage;
