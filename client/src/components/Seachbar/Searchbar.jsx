import { useState, useEffect } from "react";
import style from "./SearchBar.module.css"
import axios from "axios";
import lupa from "../../assets/lupa.png"
import { getDogsByName, getDogs } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar =()=>{
    const dispatch = useDispatch()
    const [id, setId] = useState("")

  

    const handleChange = (event)=>{
        setId(event.target.value)
    };
 
    const handleSearch = ()=>{
        dispatch(getDogsByName(id))
       
    }

    const handleClear = ()=>{
        setId("")
        dispatch(getDogs())
    };
   
    return(
        <>
        <h2>Search a dog by its breed!</h2>
        <img src={lupa} alt="" onClick={handleSearch} className={style.lupa}/>
        <input 
        className={style.searchbar}
        type='search'
        value={id}
        onChange={handleChange}
        />
       
         <li className={style.buttonX} onClick={handleClear} >X</li>
        
        </>
        )
        
    }

export default SearchBar