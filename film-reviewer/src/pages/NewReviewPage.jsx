import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Title,
} from "@mantine/core";
import { randomId } from "@mantine/hooks";
import axios from "axios";
import { BASE_URL } from '../BaseUrl';
import { useNavigate } from "react-router-dom";

function valuesPage() {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      titulo: "",
      autor: "",
      imagen: "",
      opinion: "",
      rating: "",
      sinopsis: "",
    },
  });

  const handleSubmit = (values) => {

    console.log("Reseña generada:", values);
    
    axios
      .post(BASE_URL + '/films.json', values)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error", err);
        setError(true);
      });
  };
  if(error){
    return (
      <>
      <p>No se ha podido añadir la pelicula</p>
      </>
    )
  }
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <Title order={2} ta="center" mb="md">
        NUEVA FILM REVIEW
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Título"
          placeholder="Título de la película"
          key={form.key("titulo")}
          {...form.getInputProps("titulo")}
        />

        <TextInput
          mt="md"
          label="Autor"
          placeholder="Nombre del autor"
          key={form.key("autor")}
          {...form.getInputProps("autor")}
        />

        <TextInput
          mt="md"
          label="URL de imagen"
          placeholder="Enlace a la imagen del póster"
          key={form.key("imagen")}
          {...form.getInputProps("imagen")}
        />

        <Textarea
          mt="md"
          label="Opinión"
          placeholder="Escribe tu opinión sobre la película"
          autosize
          minRows={3}
          key={form.key("opinion")}
          {...form.getInputProps("opinion")}
        />

        <TextInput
          mt="md"
          label="Rating"
          placeholder="Puntuación (por ejemplo: 8.5)"
          key={form.key("rating")}
          {...form.getInputProps("rating")}
        />

        <Textarea
          mt="md"
          label="Sinopsis"
          placeholder="Breve resumen de la película"
          autosize
          minRows={4}
          key={form.key("sinopsis")}
          {...form.getInputProps("sinopsis")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit">Guardar Reseña</Button>
        </Group>

        <Group justify="center" mt="md">
          <Button component={Link} to="/">
            Volver al inicio
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default valuesPage;
