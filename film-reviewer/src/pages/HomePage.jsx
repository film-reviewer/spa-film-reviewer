import React, { useEffect, useState } from 'react';
import FilmList from '../components/FilmList';
import { BASE_URL } from '../BaseUrl';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Group, Button } from '@mantine/core';



function HomePage() {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(BASE_URL + '/films.json')
            .then((response) => {

                const filmsObj = response.data;

                const filmsArr = Object.keys(filmsObj).map((id) => ({
                    id,
                    ...filmsObj[id],
                }));


                setFilms(filmsArr);
            })
            .catch((error) => {
                console.log('No hay películas para mostrar en la lista...', error);
            });
    }, []);
  
    const deleteFilm = (id) => {
    axios
      .delete(`${BASE_URL}/films/${id}.json`)
      .then(() => {
        setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
      })
      .catch((error) => {
        console.error('Error al eliminar la película', error);
      });
  };
  const detailsPage = (id) =>{
    navigate(`/details/${id}`);
  }
    return (
        <>
            <Button color="orange" variant="light">CREAR REVIEW</Button>
            <FilmList films={films} onDelete={deleteFilm} onDetails={detailsPage} />
        </>
    );
};


export default HomePage;