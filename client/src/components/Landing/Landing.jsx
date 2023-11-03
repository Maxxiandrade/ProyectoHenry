import {Link} from 'react-router-dom'

import style from "./Landing.module.css"

const Landing = ()=>{
   
     

    return(
        <div className={style.backgroundImg} >
        <b className={style.intro}>
¡Welcome to Henry Dogs!, We are your reliable source for information about dogs. At Henry Dogs, we are passionate about providing accurate and detailed data about a wide variety
 of canine breeds. Our platform connects directly to an API that is regularly updated, allowing us to offer you up-to-date information about breeds, including details such as breed,
weight, temperament, life expectancy, and much more.
<hr />         
Explore Our Variety: From the most popular breeds to the lesser-known ones, you will find a wide range of detailed information about each of them. Detailed Data: Discover unique 
characteristics such as average weight and typical temperaments. Images and Descriptions: We accompany each breed profile with authentic
 images and detailed descriptions to help you visualize and better understand each canine companion.</b>
            <Link to='/home'>
            <button className={style.button}>Home</button>
            </Link>
        </div>
    )
};

export default Landing