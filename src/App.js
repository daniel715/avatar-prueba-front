import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  const [charactersBymovie, setcharactersBymovie] = useState([]);

  useEffect(() => {
    // Llamada a la API de TMDb para obtener películas populares
    axios.get('https://api.jikan.moe/v4/anime?q=one', {
      params: {
        // api_key: 'TU_CLAVE_DE_API', // Reemplaza con tu clave de API de TMDb
      }
    })
      .then((response) => {
        setMovies(response.data.data);
        console.log("response", response.data.data)
      })
      .catch((error) => {
        console.error('Error al obtener datos de películas:', error);
      });

  }, []);


  function findCharactersByMovie() {
    for (let index = 0; index < movies.length; index++) {
      axios.get(`https://api.jikan.moe/v4/anime/${movies[index].mal_id}/characters`, {
      })
        .then((response) => {
          setcharactersBymovie(response.data.data);
          console.log("response", response.data.data)
        })
        .catch((error) => {
          console.error('Error al obtener datos de películas:', error);
        });

    }
  }


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Películas Populares</h1>
      <div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        {/* <Background */}
        {movies.map((movie) => (
          // Llamada a la API de TMDb para obtener películas populares
        <MovieCard name={movie.title} image={movie.images.webp.image_url} key={movie.mal_id} movie={movie} />
        ))}

      </div>
    </div>
  );
}

export default App;
