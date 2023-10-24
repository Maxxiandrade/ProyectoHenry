import style from "./Nav.module.css";
import SearchBar from "../Seachbar/Searchbar";
import Temperaments from "../Temperaments/Temperaments";
import { Link } from "react-router-dom";


const Nav = ()=>{
  
    return(
        <nav className={style.nav}>
            <h1 className={style.h1}>
                Henry 
            </h1>
            <h2 className={style.h2}>Dogs</h2>
            <Temperaments/>
            <SearchBar/>
            <Link to='/'><li className={style.li}>Out</li></Link>
        </nav>
    )
};

export default Nav;