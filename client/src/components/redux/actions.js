import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

export const addFav = (character) => {
   
    const endpoint = 'http://localhost:3003/rickandmorty/fav';
    return async(dispatch) => {
      try {
            const {data} = await axios.post(endpoint, character)
               return dispatch({
                                 type: ADD_FAV,
                                 payload: data,
       });
    }catch(error){
      throw Error(error.message)
    }
   }
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3003/rickandmorty/fav/' + id;
    return async(dispatch) => {
      try{
       const {data} = await axios.delete(endpoint)
       
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
            
       });
    }catch(error){
      throw Error(error.message)
    }
   }
 };

export const filterCards = (gender)=>{
    return {type: FILTER, payload: gender}
};

export const orderCards = (order)=>{
    return {type: ORDER, payload: order}
};