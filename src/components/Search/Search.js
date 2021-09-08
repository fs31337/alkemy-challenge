import React,{useState} from 'react';
import axios from 'axios';
import getHeroByName from '../../services/getHeroByName';

function Search({setHeros}) {

    let initialState = "";
    const [input, setInput] = useState();

    function handleSubmit(e){
        if(input.length >=2){
            e.preventDefault();
            getHeroByName(input,setHeros)
            setInput(initialState);
        }
        e.preventDefault();
    }

    function handleInputChange({target}){
        setInput ( target.value)
    }

    return (
        <form onSubmit={(e) =>handleSubmit(e)}>
            <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
        </form>
    )
}

export default Search;
