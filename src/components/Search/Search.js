import React,{useState} from 'react';
import getHeroByName from '../../services/getHeroByName';

function Search() {
    const [input, setInput] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        getHeroByName(input)
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
