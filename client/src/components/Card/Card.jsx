import React from "react";

const Card = ({id, imagen, nombre, pesoImp, pesoMetric, temperamento})=>{
    return(
        <>
        <div>
            <img className="images" src={imagen} style={{height: "400px", width:"600px"}}></img>
            <p>{nombre}</p>
            <p>Peso imperial: {pesoImp}</p>
            <p>Peso métrico: {pesoMetric}</p>
            <p>{temperamento}</p>
        </div>
        </>
    )
};

export default Card;