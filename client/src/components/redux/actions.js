import axios from "axios";
import { FILTER, ORDER, ALL_DOGS, DOG_NAME, GET_TEMPERAMENTS } from "./action-types"


export const getDogs = ()=>async(dispatch)=>{
    try {
        const {data} = await axios(`http://localhost:3001/dogs`)
        dispatch({type: ALL_DOGS, payload: data})
    } catch (error) {
        throw Error(error)
    }
};

export const filterCards = (temperament)=>{
    return {type: FILTER, payload: temperament}
};


export const orderCards = (order)=>{
    return {type: ORDER, payload: order}
};

export const getDogsByName = (name)=>async(dispatch)=>{
    try {
        if(name === "null"){
            const {data} = await axios(`http://localhost:3001/dogs`)
            dispatch({type: DOG_NAME, payload: data})
        }
        const {data} = await axios(`http://localhost:3001/dogs/name?name=${name}`)
        dispatch({type: DOG_NAME, payload: data})
    } catch (error) {
        throw Error(error)
    }
};

export const getTempers = ()=>async(dispatch)=>{
    try {
        const {data} = await axios("http://localhost:3001/temperaments")
        dispatch({type: GET_TEMPERAMENTS, payload: data})
    } catch (error) {
        throw Error(error)
    }
};

