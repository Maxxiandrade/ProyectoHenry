import { useState } from "react";
import style from "./SearchBar.module.css"
import axios from "axios";
import lupa from "../../assets/lupa.png"

const SearchBar =({onSearch})=>{

    const [id, setId] = useState("")

  

    const handleChange = (event)=>{
        setId(event.target.value)
    };
 
    
   
    return(
        <>
        <h2>Search a dog by its breed!</h2>
        <img src={lupa} alt="" onClick={()=>onSearch(id)} className={style.lupa}/>
        <input 
        className={style.searchbar}
        type='search'
        value={id}
        onChange={handleChange}
        />
         <li className={style.buttonX} onClick={()=>{onSearch(); setId("")}} >X</li>
        </>
        )
        
    }

export default SearchBar