import style from "./Nav.module.css";
import SearchBar from "../Seachbar/Searchbar";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";


const Nav = ()=>{
  
    return(
        <nav className={style.nav}>
            <h1 className={style.h1}>
                Henry 
            </h1>
            <h2 className={style.dogs}>Dogs</h2>
            <SearchBar/>
            <Filters/>
            <Link to='/createdog'><button>Create dog</button></Link>
            <Link to='/'><button className={style.li}>Out</button></Link>
        </nav>
    )
};

export default Nav;