import React from 'react';
import './Cards.css';

function Cards({ Nombre, Estado, Especie, Genero, Foto }) {
  return (
    <div className="d-flex">
      <img 
        src={Foto} 
        alt={Nombre} 
        className='img-fluid' 
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150'; // Placeholder en caso de error
        }} 
      />
      <div className="content">
        <h2>{Nombre}</h2>
        <small>Estado:</small>
        <p>{Estado}</p>
        <small>Especie:</small>
        <p>{Especie}</p>
        <small>Género:</small>
        <p>{Genero}</p>
      </div>
    </div>
  );
}

export default Cards;
