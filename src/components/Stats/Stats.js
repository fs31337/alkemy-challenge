import React from 'react';
import './stats.styles.css';

function Stats({stats}) {
    function orderStats(stats){
        let keysSorted = Object.keys(stats.powerstats).sort(function(a,b){return stats.powerstats[a]-stats.powerstats[b]})
        return keysSorted[keysSorted.length-1];
    }
    return (
        <div>
        {console.log(orderStats(stats),"order Stats")}
        {console.log(stats)}
        <h5>Stats</h5>
        <h2 className="spec">{orderStats(stats)}</h2>
        <div className="row01">
                <p><strong>Heights: </strong>{stats.heights}</p>
                <p><strong>Weights: </strong>{stats.weights}</p>
                <p><strong>Combat: </strong>{stats.powerstats.combat}</p>
                <p><strong>Durability: </strong>{stats.powerstats.durability}</p>
                <p><strong>Intelligence: </strong>{stats.powerstats.intelligence}</p>
                <p><strong>Power: </strong>{stats.powerstats.power}</p>
                <p><strong>Speed: </strong>{stats.powerstats.speed}</p>
                <p><strong>Strenght: </strong>{stats.powerstats.strength}</p></div>
        </div>
    )
}

export default Stats
