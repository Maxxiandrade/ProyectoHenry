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
          pesoImp={perro.peso?.imperial}
          pesoMetric={perro.peso?.metric}
          temperamento={perro.temperamento}
          />
          ))}
    </div>
          </>
  );
};

export default Cards;