import React, { useState, useEffect } from 'react';
import Cards from './componentes/Cards';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const setlist = async (pageNumber) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      const personajes = await response.json();
      setCharacters((prevCharacters) => [...prevCharacters, ...personajes.results]);
      console.log('Los personajes son: ', personajes.results);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    setlist(page);
  }, [page]);

  const loadMoreCharacters = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='container-fluid'>
      <h1 className='Title'>The Rick and Morty API</h1>
      <div className="row">
        <div className='List d-flex flex-wrap'>
          {characters.map((character) => (
            <div className='Personajes' key={character.id}>
              <Cards 
                Foto={character.image}
                Nombre={character.name} 
                Estado={character.status} 
                Especie={character.species} 
                Genero={character.gender} 
              />
            </div>
          ))}
        </div>
        <button className="load-more" onClick={loadMoreCharacters}>Cargar más personajes</button>
      </div>
    </div>
  );
}

export default App;
