import React from "react";
import style from "./Card.module.css";

const Card = ({id, imagen, nombre,  peso, temperamento})=>{
    

    return(
        <>
        <div className={style.card}>
            <h2 className={style.container}>{nombre}</h2>
            <img className={style.image} src={imagen} alt="xd"></img>
            <h3 className={style.h3}>{peso}</h3>
            <p className={style}>{temperamento}</p>
        </div>
        </>
    )
};

export default Card;