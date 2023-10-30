import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail =()=>{
   const params = useParams();
   const [dog, setDog] = useState();
   

   useEffect(() => {
    axios(`http://localhost:3001/dogs/${params.id}`).then(( {data} ) => {
      
       if (data) {
          setDog(data);
    
       } });
    }, [params?.id]);
    
    

    return(
        <div>
        {dog && (
            <>
                {dog.nombre && <h2 className={style.nombre}>{dog.nombre}</h2>}
                {dog.imagen && <img src={dog.imagen} alt={dog.nombre} className={style.image}/>}
                {dog.altura && <p>Average height: {dog.altura} Cm</p>}
                {dog.peso && <p>Average weight: {dog.peso} Kg</p>}
                {dog.vida && <p>Lifespan: {dog.vida}</p>}
                {dog.temperamento && <p>Temperament: {dog.temperamento}</p>}
                <hr />
                <Link to='/home'>
            <button>Back</button>
            </Link>
            </>
        )}
    </div>
        
    )
};

export default Detail;