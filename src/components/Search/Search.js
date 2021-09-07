import React,{useState} from 'react';
import getHeroByName from '../../services/getHeroByName';

function Search() {
    let initialState = "";
    const [input, setInput] = useState( initialState );

    function handleSubmit(e){
        if(input.length >=2){
            e.preventDefault();
            getHeroByName(input);
            setInput(initialState);
        }
        e.preventDefault();
    }

    function handleInputChange({target}){
        setInput ({
            ...input,
            [target.name]: target.value
        })
    }

    return (
        //validar con formik
        <div>
            Formulario
                Nombre del heroe
                Imagen
                Acciones para agregarlo al equipo
        </div>
    )
}

export default Search;
