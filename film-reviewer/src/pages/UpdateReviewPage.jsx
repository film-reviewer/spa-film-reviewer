
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

function UpdateReviewPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [film, setFilm] = useState(null);
    const BASE_URL = "https://film-reviewer-96fd6-default-rtdb.europe-west1.firebasedatabase.app";

    // Cargar película desde Firebase
    useEffect(() => {
        fetch(`${BASE_URL}/films/${id}.json`)
            .then((res) => res.json()) //convierte la respuesta a un objeto JavaScript
            .then((data) => setFilm(data)) // guarda los datos de la película en el estado
            .catch((err) => console.error("Error al cargar:", err));
    }, [id]);

    // Actualizar datos en Firebase
    const handleSubmit = (e) => {
        e.preventDefault(); // evitamos que el formulario recargue la pagina

        fetch(`${BASE_URL}/films/${id}.json`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(film), // convierte el objeto film en texto JSON
        })
            .then(() => navigate("/"))
            .catch((err) => console.error("Error al actualizar:", err));
    };

    if (!film) return <p>Cargando...</p>;

    return (
        <div>
            <h2>Editar película</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Opinión</label>
                    <textarea
                        value={film.opinion || ""} // mostramos lo que ya esta guardado en FireBase
                        onChange={(e) => setFilm({ ...film, opinion: e.target.value })} // onChange: actualizamos el estado de film cada vez que escribimos y opinion: e.target.value: reemplaza solo el campo que cambiaste
                    />
                </div>

                <div>
                    <label>Sinopsis</label>
                    <textarea
                        value={film.sinopsis || ""}
                        onChange={(e) => setFilm({ ...film, sinopsis: e.target.value })}
                    />
                </div>

                <div>
                    <label>Nota</label>
                    <input
                        type="text"
                        value={film.rating || ""}
                        onChange={(e) => setFilm({ ...film, rating: e.target.value })}
                    />
                </div>

                <Button type="submit" color="indigo" fullWidth>
                    Guardar cambios
                </Button>
            </form>
        </div>
    );
}

export default UpdateReviewPage;
