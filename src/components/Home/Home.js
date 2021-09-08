import React,{ useState } from 'react';
import { useSelector } from "react-redux";
import Search from '../Search/Search'
import HeroCard from '../HeroCard/HeroCard'

function Home() {
    const [heros, setHeros] = useState(null); //limpiar
    const team = useSelector((state) => state.heroes); //////////**********/////////////

    return (
        <div>
            <Search setHeros={setHeros} />
            <div>
                {Array.isArray(heros) && heros.length > 0 ? (heros.map(hero => {
                    return <HeroCard hero={hero}/>
                }))
                :(Array.isArray(team.heroes) && team.heroes.length > 0 (team.map(hero => {
                    return <HeroCard teamate hero={hero}/>
                })))
                }
            </div>
            {/* {Mapear team si es un arreglo y si heros esta vacio.
                Hero name
                Imagen
                Powerstats
                Acciones para ver el detalle o eliminarlo del equipo} */}
        </div>
    )
}

export default Home
