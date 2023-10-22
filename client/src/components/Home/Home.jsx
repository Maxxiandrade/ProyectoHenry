import { Link } from "react-router-dom";
import SearchBar from "../Seachbar/Searchbar";
import CardList from '../Card/CardList'
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ()=>{
    const [perros, setPerros] = useState([])


    const onGetData = async(id)=>{
      if(id){
        const {data} = await axios(`http://localhost:3001/dogs/${id}`)
        setPerros(data)
      }else{
        const {data} = await axios(`http://localhost:3001/dogs`)
        setPerros(data)
        
      }
    };
   
    useEffect(()=>{
      if(!perros.length){
        onGetData()
      }
    },[perros])
    return(
        <div>
            <h1>Página home..</h1>
            <Link to='/'><button>Back</button></Link>
            <SearchBar/>
            <CardList perros={perros}></CardList>
            </div>
    )
};


export default Home