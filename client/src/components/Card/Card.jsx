import React from "react";

const Card = ({id, imagen, nombre, alturaImp, alturaMetric, pesoImp, pesoMetric, vida})=>{
    return(
        <div>
            <p>{nombre}</p>
            <p>{imagen}</p>
            <p>Altura imperial: {alturaImp}</p>
            <p>Altura métrica: {alturaMetric}</p>
            <p>Peso imperial: {pesoImp}</p>
            <p>Peso métrico: {pesoMetric}</p>
            <p>{vida}</p>
        </div>
    )
};

export default Card;