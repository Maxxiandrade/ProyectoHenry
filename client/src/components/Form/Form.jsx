import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Validations from './Validations'
import axios from "axios"
import { useSelector } from "react-redux";
import style from "./Form.module.css"


const Form = (postDogs)=>{
    const tempers = useSelector(state=>state.allTemperaments)

    const[dogInfo, setDogInfo] = useState({
        nombre:"",
        altMin:"",
        altMax:"",
        pesMin:"",
        pesMax:"",
        vida:"",
        temperaments:[]
    });

    const [errors,setErrors]=useState({
        nombre:"",
        altMin:"",
        altMax:"",
        pesMin:"",
        pesMax:"",
        vida:""
    });
    
  
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
    
        if (type === "checkbox") {
            const updatedTemperaments = checked 
                ? [...dogInfo.temperaments, value] 
                : dogInfo.temperaments.filter(item => item !== value);
    
            setDogInfo({
                ...dogInfo,
                temperaments: updatedTemperaments
            });
        } else {
            setDogInfo({
                ...dogInfo,
                [name]: value
            });
        }
    };


    const handleSubmit=(event)=>{
        event.preventDefault();
        const altura = `${dogInfo.altMin} - ${dogInfo.altMax}`;

    // Combinar los valores de pesMin y pesMax
    const peso = `${dogInfo.pesMin} - ${dogInfo.pesMax}`;
    const dogData = {
        ...dogInfo,
        altura,
        peso
    };

      const {data} = axios.post('http://localhost:3001/dogs', dogInfo)
    };

    useEffect(()=>{
        if(dogInfo.nombre !== "" || dogInfo.altMin !== "" || dogInfo.altMax !== "" || dogInfo.pesMin !== "" || dogInfo.altMax !== "" || dogInfo.vida !== ""){
        const perroValidado = Validations(dogInfo)
        setErrors(perroValidado)
}},[dogInfo])

    return(
        <>
        <div className={style.background}>
            <Link to='/home'>
            <button className={style.button}>Back</button>
            </Link>
        <form id="perro" key="dog" onSubmit={handleSubmit}>
    <hr />
    <label htmlFor="nombre" id="raza" className={style.label}>Dog breed:</label>
    <br />
    <input type="text" name="nombre" id="nombre" onChange={handleChange} value={dogInfo.raza} /> {errors.nombre !== "" && <p >{errors.email}</p>}
    <hr />
    <br />
    <label htmlFor="altMin" id="altura" className={style.label}>Min height</label>
    <input type="number" name="altMin" id="altMin" onChange={handleChange} value={dogInfo.altMin} />
    <label htmlFor="altMax" id="altura" className={style.label}>Max height</label>
    <input type="number" name="altMax" id="altMax" onChange={handleChange} value={dogInfo.altMax} />
    <hr />
    <br />
    <label htmlFor="pesMin" id="peso" className={style.label}>Min weight</label>
    <input type="number" name="pesMin" id="pesMin" onChange={handleChange} value={dogInfo.pesMin}/>
    <label htmlFor="pesMax" id="peso" className={style.label}>Max weight</label>
    <input type="number" name="pesMax" id="pesMax" onChange={handleChange} value={dogInfo.pesMax} />
    <hr />
    <label htmlFor="vida" id="lifespan" className={style.label}>Lifespan (years)</label>
    <input type="number" name="vida" id="vida" onChange={handleChange} value={dogInfo.vida} />
    <hr />
    <p>Select temperaments</p>
    {tempers.map((temper)=>{
        return <label className={style.container}>{temper}<input type="checkbox" onChange={handleChange} value={temper} className={style.checkbox}>{temper.name}</input><span className={style.checkmark}></span></label>
    })}
    <hr />
    <button type="submit" className={style.button}>Post dog</button>
        </form>
    </div>

        </>
    )
};

export default Form