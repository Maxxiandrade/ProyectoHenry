import React from 'react';
import Card from './Card';

const Cards = ({ perros }) => {
    return (
        <>
        <div className="cards-container">
      {perros.map((perro) => (
          <Card
          key={perro.id}
          id={perro.id}
          imagen={perro.imagen}
          nombre={perro.nombre}
          alturaImp={perro.altura.imperial}
          alturaMetric={perro.altura.metric}
          pesoImp={perro.peso.imperial}
          pesoMetric={perro.peso.metric}
          vida={perro.vida}
          />
          ))}
    </div>
          </>
  );
};

export default Cards;