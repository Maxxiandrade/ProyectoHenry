import style from "./Filters.module.css"
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards, handleFilterOrigin } from "../redux/actions";
import { useState } from "react";

const Filters = ()=>{
    const dispatch = useDispatch();
    const temperamentos = useSelector(state=>state.allTemperaments)

    const [aux, setAux] = useState(false)

    const handleOrigin =(event)=>{
        dispatch(handleFilterOrigin(event.target.value))
    }

    const handleOrder = (event)=>{
        setAux(true)
        dispatch(orderCards(event.target.value))
    };

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    };

    return(
        <div>   
            <select onChange={handleOrder} className={style.input}>
                <option value="A">Ascendent</option>
                <option value="B">Descendent</option>
            </select>
            <select onChange={handleFilter} className={style.input}>
                <option value="All">All</option>
           {temperamentos.map((temperamento, index)=>{
            return <option key={index} value={index}>{temperamento}</option>
           })}
           </select>


            <select onChange={handleOrder} className={style.input}>
                <option value="">Weigth</option>
                <option value="0-5">0-5Kg</option>
                <option value="5-10">5-10Kg</option>
                <option value="10-15">10-15Kg</option>
                <option value="15-20">15-20Kg</option>
                <option value="20">+20Kg</option>
            </select>

            <select onChange={handleOrigin} className={style.input}>
                <option value="API">API</option>
                <option value="Database">Database</option>
            </select>
        </div>
    )
};

export default Filters;