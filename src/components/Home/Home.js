import React,{ useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import Search from '../Search/Search';
import Stats from '../Stats/Stats';
import HeroCard from '../HeroCard/HeroCard';
import './Home.styles.css';

function Home() {
    const team = useSelector((state) => state);
    const [heros, setHeros] = useState(null);
    let initialValues = {
        alignments: {good: 0, bad: 0},
        powerstats: {intelligence: 0,strength: 0,combat:0,speed:0,durability:0,power:0},
        weights: 0,heights: 0,
    };
    const [stats, setStats] = useState(initialValues);
    function calculateStats(team){
        let obj = initialValues;
        if( Array.isArray(team.heros) && team.heros.length > 0){
            team.heros.map(hero => {
                if(hero.biography.alignment === 'good' || hero.biography.alignment === 'bad'){
                    obj.alignments[hero.biography.alignment] +=1
                }
                obj.heights += + Math.ceil(hero.appearance.height[1].split(" ")[0] / team.heros.length)
                obj.weights += + Math.ceil(hero.appearance.weight[1].split(" ")[0] / team.heros.length)
                obj.powerstats.intelligence += hero.powerstats.intelligence != "null" ? Math.ceil(+hero.powerstats.intelligence / team.heros.length) : 0
                obj.powerstats.combat += hero.powerstats.combat !== "null" ? Math.ceil(hero.powerstats.combat / team.heros.length) : 0
                obj.powerstats.power += hero.powerstats.power !== "null" ? Math.ceil(+hero.powerstats.power / team.heros.length) : 0
                obj.powerstats.durability += hero.powerstats.durability !== "null" ? Math.ceil(+hero.powerstats.durability / team.heros.length) : 0
                obj.powerstats.speed += hero.powerstats.speed !== "null" ? Math.ceil(+hero.powerstats.speed / team.heros.length) : 0
                obj.powerstats.strength += hero.powerstats.strength !== "null" ? Math.ceil(+hero.powerstats.strength / team.heros.length) : 0
            })
        }
        setStats(obj)
    }
    useEffect(() => {
        calculateStats(team)
        },[team])

    return (
        <div>
            <Search setHeros={setHeros}/>
                {heros!==null ? <h1>Results</h1> : null}
            <div className="searchResultsContainer">
                {Array.isArray(heros) && heros.length > 0 ? (heros.map(hero => {
                    return <HeroCard hero={hero} teamFull={team.heros.length>5} alignments={stats.alignments}/>
                }))
                : <p></p>
                }
            </div>
            <div className="team-container">
                {team.heros.length ? <h1>Team</h1> : <h3>Team empty</h3>}
                {team.heros.length ? <Stats stats={stats}/> : null}
                <div className="heros">
                    {Array.isArray(team.heros) && team.heros.length ? (team.heros.map(hero => {
                            return <HeroCard teamate hero={hero} alignments={stats.alignments}/>
                        }))
                        : <p></p>
                        }
                </div>
            </div>
        </div>
    )
}

export default Home
