import React from 'react';
import Card from './Card';
import style from "./Card.module.css"
import { Link } from 'react-router-dom';
const Cards = ({ id, imagen, nombre,  peso, temperamento }) => {
    return (
        <>
        <Link to={`/detail/${id}`}>
        <div className={style.card}>
            <p className={style.container}>{nombre}</p>
            <img className={style.image} src={imagen}></img>
            <h3 className={style.h3}>{peso}Kg</h3>
            <p className={style.p}>{temperamento}</p>
        </div>
        </Link>
          </>
  );
};

export default Cards;