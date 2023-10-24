

import { FILTER, ORDER, ALL_DOGS, DOG_NAME, GET_TEMPERAMENTS } from "./action-types";



const initialState = {
    dogs: [],
    allDogs:[],
    allTemperaments:[]
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
            case ALL_DOGS:
                  return {...state, dogs: action.payload, allDogs: action.payload};
            case DOG_NAME:
                  return{...state, dogs: action.payload};
            case GET_TEMPERAMENTS:
                  return{...state, allTemperaments: action.payload};
           
         default:
            return {...state}
}
}

export default reducer;