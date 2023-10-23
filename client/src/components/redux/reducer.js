

import { FILTER, ORDER } from "./action-types";



const initialState = {
    dogs: [],
    oldTemperaments:[]
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
            case FILTER:
                const temperToFilter = action.payload;
                if (genderToFilter === "All") {
                  return {
                    ...state,
                    myFavorites: state.allCharacters 
                  };
                } else {
                  const filteredCharacters = state.allCharacters.filter(character => character.gender === genderToFilter);
                  
                  return {
                    ...state,
                    myFavorites: filteredCharacters
                  };
                }
              
        case ORDER:
            const orderType = action.payload
            const sortedFavorites = [...state.myFavorites].sort((a,b)=>{
                if(orderType === "A"){
                    return b.id - a.id
                } if (orderType === "D"){
                    return a.id - b.id
                }
            })
            return{
                ...state,
                myFavorites:sortedFavorites,

            }
        default:
            return {...state}
}
}

export default reducer;