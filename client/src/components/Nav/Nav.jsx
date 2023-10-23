import style from "./Nav.module.css";
import SearchBar from "../Seachbar/Searchbar";
import { Link } from "react-router-dom";
const Nav = ({onSearch})=>{
    return(
        <nav className={style.nav}>
            <h1 className={style.h1}>
                Henry 
            </h1>
            <h2 className={style.h2}>Dogs</h2>
            <SearchBar onSearch={onSearch}></SearchBar>
            <Link to='/'><button>Back</button></Link>
        </nav>
    )
};

export default Nav;