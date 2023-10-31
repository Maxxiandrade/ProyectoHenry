import style from "./Nav.module.css";
import SearchBar from "../Seachbar/Searchbar";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";


const Nav = ()=>{
  
    return(
        <nav className={style.nav}>
            <Link to='/' className={style.link}>
            <h1 className={style.h1}>Henry </h1>
            <h2 className={style.dogs}>Dogs</h2>
            </Link>
            <SearchBar/>
            <Link to='/createdog'><button className={style.input}>Create dog</button></Link>
            <Filters/>
        </nav>
    )
};

export default Nav;