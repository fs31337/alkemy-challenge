import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Card, Button} from 'react-bootstrap';
import createTeam from '../../services/createTeam';

function Home() {
    const team = useSelector((state) => state.team);

    useEffect(() => {
        createTeam(); //despues sacamos esto, armar el team de 0
    },[])
    return (
        <div>
            Hero name
            Imagen
            Powerstats
            Acciones para ver el detalle o eliminarlo del equipo
        </div>
    )
}

export default Home
