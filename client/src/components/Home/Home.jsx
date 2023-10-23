import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import CardList from '../Card/CardList'
import { useState, useEffect} from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css"

const Home = ()=>{
   
    const [perros, setPerros] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);

    const lastDogIndex = currentPage * dogsPerPage // 8
    const firstDogIndex = lastDogIndex - dogsPerPage // 0
    const currentDogs = perros.slice(firstDogIndex, lastDogIndex)

    const paginado = (pagenumber)=>{return setCurrentPage(pagenumber)}

    const onGetData = async(id)=>{
      if(id){
        const {data} = await axios(`http://localhost:3001/dogs/${id}`)
        setPerros(data)
      }else{
        const {data} = await axios(`http://localhost:3001/dogs`)
        setPerros(data)
       
      }
    };
    const onSearch = async(id)=>{
      try {
          if(!id){
           onGetData()
          }
          if(id){
            onGetData(id)
             const {data} = await axios(`http://localhost:3001/dogs/name?name=${id}`)
             console.log(data);
             setPerros(data)
          }
      } catch (error) {
          throw Error(error)
      }
    }
   
    
    useEffect(()=>{
      if(!perros.length){
        onGetData()
      }
    },[perros])
    
    

    return(
      <>
      <div >
            <Nav onSearch={onSearch}></Nav>
            <Pagination dogsPerPage={dogsPerPage} dogs={perros} paginado={paginado} currentPage={currentPage}/>
            <CardList perros={currentDogs}></CardList>
            <Pagination dogsPerPage={dogsPerPage} dogs={perros} paginado={paginado} currentPage={currentPage}/>
            </div>
      </>
    )
};


export default Home