import style from "./Temperaments.module.css"
import { useSelector } from "react-redux/es/hooks/useSelector";

const Temperaments = ()=>{
    const temperamentos = useSelector(state=>state.allTemperaments)
    console.log(temperamentos);

    return(
        <div>
            <select name="" id="">
           {temperamentos.map((temperamento, index)=>{
            return <option key={index} value={temperamento}>{temperamento}</option>
           })}
           </select>
        </div>
    )
};

export default Temperaments;