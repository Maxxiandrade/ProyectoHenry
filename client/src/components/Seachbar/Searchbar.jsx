import { useState } from "react";
import style from "./SearchBar.module.css"
import axios from "axios";

const SearchBar =({onSearch})=>{

    const [id, setId] = useState("")

    const handleChange = (event)=>{
        setId(event.target.value)
    }
 
   
    return(
        <>
        <button className={style.button} onClick={()=>onSearch(id)}>GET PERROS</button>
        <input 
        className={style.searchbar}
        type='search'
        value={id}
        onChange={handleChange}
        />
         <button className={style.button} >ALL PERROS</button>
        </>
        )
        
    }

export default SearchBar