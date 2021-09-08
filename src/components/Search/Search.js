import React,{useState} from 'react';
import getHeroByName from '../../services/getHeroByName';
import {Button} from 'react-bootstrap';
import '../Home/Home.styles.css';



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
    function reset(){
        setHeros([])
    }

    function handleInputChange({target}){
        setInput ( target.value)
    }

    return (
        <form onSubmit={(e) =>handleSubmit(e)} className="searchHero">
            <input type="text" placeholder="Search a Hero!" value={input} onChange={(e) => handleInputChange(e)} />
            <Button onClick={() => reset()}>Clear</Button>
        </form>
    )
}

export default Search;
