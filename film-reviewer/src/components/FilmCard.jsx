

import { Button, Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";


function FilmCard({ film, onDelete, onDetails }) {

  const [opened, setOpened] = useState(false);

  const handleDelete = () => {
    onDelete(film.id); // llamamos a la función de eliminación pasada por props
    setOpened(false);  // cerramos el modal
  };
  return (
    <div className="film-card">
      <div className="img-container">
        <img src={film.imagen} alt={film.title} />
      </div>
      <h3>{film.titulo}</h3>
      <p><strong>Nota:</strong> {film.rating}</p>
      <p>{film.autor}</p>
      <Link to={`/details/${film.id}`}>
        <Button color="orange" onClick={() => onDetails(film.id)}> Ver detalles</Button>
      </Link>

      <Button variant="outline" color="red" onClick={() => setOpened(true)}>Eliminar</Button>

      <Link to={`/update/${film.id}`}>
        <Button color="indigo">Editar</Button>
      </Link>


      {/* Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Eliminar película"
        centered
        withinPortal={false}
      >
        <p>¿Estás seguro de que quieres eliminar esta película?</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button variant="outline" color="gray" onClick={() => setOpened(false)}>
            Cancelar
          </Button>
          <Button color="red" onClick={() => { onDelete(film.id); setOpened(false); }}>
            Eliminar
          </Button>
        </div>
      </Modal>

    </div >
  );
}

export default FilmCard;