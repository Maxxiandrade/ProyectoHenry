import axios from "axios";
import { FILTER, ORDER } from "./action-types"


export const filterCards = (temperament)=>{
    return {type: FILTER, payload: temperament}
};

export const orderCards = (order)=>{
    return {type: ORDER, payload: order}
};