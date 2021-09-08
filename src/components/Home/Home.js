import React,{ useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import Search from '../Search/Search'
import HeroCard from '../HeroCard/HeroCard'

function Home() {
    const team = useSelector((state) => state);
    const [heros, setHeros] = useState(null); //limpiar
    let initialValues = {
        alignments: {good: 0, bad: 0, neutral: 0},
        powerstats: {intelligence: "",strength: ""},
        weights: 0,heights: 0,
    };
    const [stats, setStats] = useState(initialValues);
    console.log(stats,"stats")

    function calculateStats(team){
        let obj = initialValues;
        if( Array.isArray(team.heros) && team.heros.length > 0){
            team.heros.map(hero => {
                obj.alignments[hero.biography.alignment] +=1
            })
        }
        console.log(obj,"OBJ")
        setStats(obj)
    }
    useEffect(() => {
        calculateStats(team)
        },[team])

    return (
        <div>
            <Search setHeros={setHeros}/>
            <div>
                {Array.isArray(heros) && heros.length > 0 ? (heros.map(hero => {
                    return <HeroCard hero={hero} alignments={stats.alignments} teamLength={team.length}/>
                }))
                :(Array.isArray(team[heros]) && team[heros].length > 0 (team[heros].map(hero => {
                    return <HeroCard teamate hero={hero} alignments={stats.alignments}/>
                })))
                }
            </div>
        </div>
    )
}

export default Home
