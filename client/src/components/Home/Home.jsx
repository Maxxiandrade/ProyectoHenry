import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import About from "../About/About";
import CardList from '../Card/CardList'
import { useState, useEffect} from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css"
import {useDispatch, useSelector} from "react-redux";
import { getDogs, getTempers } from "../redux/actions";


const Home = ()=>{
   const perros = useSelector(state=>state.dogs);
   
   const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);

    const lastDogIndex = currentPage * dogsPerPage // 8
    const firstDogIndex = lastDogIndex - dogsPerPage // 0
    const currentDogs = perros.slice(firstDogIndex, lastDogIndex)
   

    const paginado = (pagenumber)=>{return setCurrentPage(pagenumber)}

    useEffect(()=>{
      dispatch(getDogs())
      dispatch(getTempers())
    },[dispatch])

    
    return(
      <>
      <div className={style.home} >
            <Nav/>
            <Pagination dogsPerPage={dogsPerPage} dogs={perros} paginado={paginado} currentPage={currentPage}/>
           { currentDogs.map((perro)=>{return <CardList
                
                key={perro.id}
                id={perro.id}
                imagen={perro.imagen}
                nombre={perro.nombre}
                peso={perro.peso} 
                temperamento={perro.temperamento}
            ></CardList>})}
            <Pagination dogsPerPage={dogsPerPage} dogs={perros} paginado={paginado} currentPage={currentPage}/>
            </div>
            <About/>
      </>
    )
};


export default Home