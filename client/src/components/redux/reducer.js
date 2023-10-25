

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
            case ORDER:
                  const orderType = action.payload;
                  const sortedDogs = [...state.dogs].sort((a,b)=>{
                  const getWeightAverage=(weightRange) =>{
                        const [min, max] = weightRange.split(' - ').map(Number);
                        return (min + max) / 2;
                            }
                  const weightA = getWeightAverage(a.peso);
                  const weightB = getWeightAverage(b.peso);
                  
                  if (orderType === "0-5") {
                    return weightA <= 5 ? -1 : 1;
                  }
                  if (orderType === "5-10") {
                    return weightA > 5 && weightA <= 10 ? -1 : 1;
                  }
                  if (orderType === "10-15") {
                    return weightA > 10 && weightA <= 15 ? -1 : 1;
                  }
                  if (orderType === "15-20") {
                    return weightA > 15 && weightA <= 20 ? -1 : 1;
                  }
                  if (orderType === "+20") {
                    return weightA > 20 ? 1 : -1;
                            }            
                  if(orderType === "A"){
                        return a.id - b.id
                  }if(orderType === "B"){
                        return b.id- a.id
                   }
                   return 0
                  })
                   
                  
                  return{...state, dogs: sortedDogs}
            case FILTER:
                  const index = action.payload; //2
                  const temperToFilter = state.allTemperaments[index]
                  const filteredDogs = state.dogs.filter((dog) => dog.temperamento && dog.temperamento.includes(temperToFilter))              
                  
                 if(action.payload==="All"){
                  return{...state, dogs: state.allDogs }

                 }
             return {...state, dogs: filteredDogs}
         default:
            return {...state}
}
}

export default reducer;