import { useState } from "react";

const SearchBar = (onSearch)=>{

    const [id, setId] = useState("")

    const handleChange = (event)=>{
        setId(event.target.value)
    }

    return(
        <input 
         type='search'
         value={id}
         onChange={handleChange}
         />
    )
};

export default SearchBar