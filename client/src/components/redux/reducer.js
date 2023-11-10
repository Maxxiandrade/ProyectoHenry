

import { FILTER, ORDER, ALL_DOGS, DOG_NAME, GET_TEMPERAMENTS, DOGS_ORIGIN } from "./action-types";



const initialState = {
    dogs: [],
    allDogs:[],
    allTemperaments:[]
};
const getWeightAverage=(weightRange) =>{
      const [min, max] = weightRange.split(' - ').map(Number);
      return (min + max) / 2;
          }


const reducer = (state = initialState, action)=>{
      
    
    switch(action.type){
            case ALL_DOGS:
                  return {...state, dogs: action.payload, allDogs: action.payload};
            case DOG_NAME:
                  return{...state, dogs:action.payload};
            case GET_TEMPERAMENTS:
                  return{...state, allTemperaments: action.payload};
            case ORDER:
                  const orderType = action.payload;
                  const sortedDogs = [...state.dogs].sort((a,b)=>{
                  const weight = getWeightAverage(a.peso);

                  if (orderType === "0-5") {
                    return weight <= 5 ? -1 : 1;
                  }
                  if (orderType === "5-10") {
                    return weight > 5 && weight <= 10 ? -1 : 1;
                  }
                  if (orderType === "10-15") {
                    return weight > 10 && weight <= 15 ? -1 : 1;
                  }
                  if (orderType === "15-20") {
                    return weight > 15 && weight <= 20 ? -1 : 1;
                  }
                  if (orderType === "20") {
                    return weight > 20 ? -1 : 1;
                            }            
                  if (orderType === "A") {
                    return a.nombre.toUpperCase().localeCompare(b.nombre.toUpperCase()); //Compara strings y determina el orden alfabetico
                  } else if (orderType === "B") {
                    return b.nombre.toUpperCase().localeCompare(a.nombre.toUpperCase());
                  }
                  })
                   
                  if(action.payload === "All"){
                        return{...state, dogs: state.allDogs}
                  }
                  return{...state, dogs: sortedDogs}
            case FILTER:
                  const index = action.payload; //2
                  const temperToFilter = state.allTemperaments[index]
                  const filteredDogs = state.dogs.filter((dog) => dog.temperamento && dog.temperamento.includes(temperToFilter))              
                  if(action.payload==="All"){
                  return{...state, dogs: state.allDogs}
                 }
                  return {...state, dogs: filteredDogs}
      
            case DOGS_ORIGIN:
                        const newDogsOrigin = action.payload; // API / DB / All
                        if(newDogsOrigin === "All"){return{...state, dogs: state.allDogs}}
                        const filteredDogsOrigin = state.allDogs.filter(dog => {
                  return newDogsOrigin === "API" ? !dog.originDb : dog.originDb;
                  });
                  return { ...state, dogs: filteredDogsOrigin};
         default:
            return {...state}
}
}

export default reducer;