import React from "react";

const Card = ({id, imagen, nombre, pesoImp, pesoMetric, temperamento})=>{
    return(
        <div>
            <p>{nombre}</p>
            <p>{imagen}</p>
            <p>Peso imperial: {pesoImp}</p>
            <p>Peso métrico: {pesoMetric}</p>
            <p>{temperamento}</p>
        </div>
    )
};

export default Card;