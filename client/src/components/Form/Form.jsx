import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Validations from './Validations'
import axios from "axios"
import { useSelector } from "react-redux";

const Form = (postDogs)=>{
    const tempers = useSelector(state=>state.allTemperaments)
    console.log(tempers);

    const[dogInfo, setDogInfo] = useState({
        nombre:"",
        altMin:"",
        altMax:"",
        pesMin:"",
        pesMax:"",
        vida:"",
        temperamento:[]
    });

    const [errors,setErrors]=useState({
        nombre:"",
        altMin:"",
        altMax:"",
        pesMin:"",
        pesMax:"",
        vida:""
    });

    const handleChange = (event)=>{
        console.log(event.target.value);
        setDogInfo({
            ...dogInfo,
            [event.target.name] : event.target.value
        })
        console.log(dogInfo);
    };


    const handleSubmit=(event)=>{
        event.preventDefault();
      const {data} = axios.post('http://localhost:3001/dogs', dogInfo)
    };

    useEffect(()=>{
        if(dogInfo.nombre !== "" || dogInfo.altMin !== "" || dogInfo.altMax !== "" || dogInfo.pesMin !== "" || dogInfo.altMax !== "" || dogInfo.vida !== ""){
        const perroValidado = Validations(dogInfo)
        setErrors(perroValidado)
}},[dogInfo])

    return(
        <>
            <Link to='/home'>
            <button>Back</button>
            </Link>
            <form id="perro" onSubmit={handleSubmit}>
    <hr />
    <label htmlFor="nombre" id="raza">Dog breed:</label>
    <br />
    <input type="text" name="nombre" id="nombre" onChange={handleChange} value={dogInfo.raza} /> {errors.nombre !== "" && <p >{errors.email}</p>}
    <hr />
    <br />
    <label htmlFor="altMin" id="altura">Min height</label>
    <input type="number" name="altMin" id="altMin" onChange={handleChange} value={dogInfo.altMin} />
    <label htmlFor="altMax" id="altura">Max height</label>
    <input type="number" name="altMax" id="altMax" onChange={handleChange} value={dogInfo.altMax} />
    <hr />
    <br />
    <label htmlFor="pesMin" id="peso">Min weight</label>
    <input type="number" name="pesMin" id="pesMin" onChange={handleChange} value={dogInfo.pesMin} />
    <label htmlFor="pesMax" id="peso">Max weight</label>
    <input type="number" name="pesMax" id="pesMax" onChange={handleChange} value={dogInfo.pesMax} />
    <hr />
    <label htmlFor="vida" id="lifespan">Lifespan (years)</label>
    <input type="number" name="vida" id="vida" onChange={handleChange} value={dogInfo.vida} />
    <hr />
    {tempers.map((temper)=>{
        return <label>{temper}<input type="checkbox" onChange={handleChange} value={dogInfo.temperamento}>{temper.name}</input></label>
    })}
    <hr />
    <button type="submit">Post dog</button>
</form>

        </>
    )
};

export default Form