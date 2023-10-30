import {Link} from 'react-router-dom'

import style from "./Landing.module.css"

const Landing = ()=>{
   
     

    return(
        <div className={style.backgroundImg} >
            <h2>Hola mundo</h2>
            <Link to='/home'>
            <button>Home</button>
            </Link>
        </div>
    )
};

export default Landing