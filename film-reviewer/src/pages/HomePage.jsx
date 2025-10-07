import React, { useEffect, useState } from 'react';
import FilmList from '../components/FilmList';
import { BASE_URL } from '../BaseUrl';
import axios from 'axios';

import { Group, Button } from '@mantine/core';



function HomePage() {
    const [films, setFilms] = useState([]);

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

    return (
        <>
            <FilmList films={films} />
        </>
    );
};


export default HomePage;