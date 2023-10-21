
// import { ADD_FAV, REMOVE_FAV } from "./action-types";

import { ADD_FAV, REMOVE_FAV,FILTER, ORDER } from "./action-types";

// const initialState = {
//     myFavorites: []
// };

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case ADD_FAV:
//                 return {
//                 ...state,
//                 myFavorites: [...state.myFavorites, action.payload]
//             }
//         case REMOVE_FAV: return{
//             ...state,
//             myFavorites: state.myFavorites.filter((character)=>{
//                 return character.id != action.payload
//             })
//         }
            
//         default:
//                 return{...state}
//     }
// };
// export default reducer;

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
            case ADD_FAV:
                return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            case REMOVE_FAV:
                    return { ...state, myFavorites: action.payload };
            case FILTER:
                const genderToFilter = action.payload;
              
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