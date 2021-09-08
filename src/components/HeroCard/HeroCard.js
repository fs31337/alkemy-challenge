import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {addHero} from '../../actions/addHero';
import {removeHero} from '../../actions/removeHero';
import { useDispatch } from 'react-redux';
import './Hero.styles.css';
import { Link } from "react-router-dom";


function HeroCard({hero,teamate,alignments,teamFull}) {
    const dispatch = useDispatch();

    function addToTeam(hero,alignments){
        if(alignments[hero.biography.alignment]< 3 || alignments[hero.biography.alignment] !== "good" || alignments[hero.biography.alignment] !== "bad"){
            dispatch(addHero(hero))
            alert("Added to the team")
        }else {
            alert(`Team ${hero.biography.alignment} part is full`)
        }}
    function removeFromTeam(hero){
        dispatch(removeHero(hero))
        alert("Hero removed from Team")
    }

    return (
        <>
        {teamate ? (
            <Link className="linkToDetail" to={`/detail/${hero.id}`}>
                <Card className="card">
                    <Card.Img variant="top" src={hero.image?.url}/>
                    <Card.Body>
                        <Card.Title>{hero.name}</Card.Title>
                        <Card.Text className="cardText">
                        <div>
                            <p><strong>Intelligence: </strong>{hero.powerstats.intelligence}</p>
                            <p><strong>Strength: </strong>{hero.powerstats.strength}</p>
                            <p><strong>Speed: </strong>{hero.powerstats.speed}</p>
                            <p><strong>Durability: </strong>{hero.powerstats.durability}</p>
                        </div>
                        <div className="columna2">
                            <p><strong>Power: </strong>{hero.powerstats.power}</p>
                            <p><strong>Combat: </strong>{hero.powerstats.combat}</p>
                            <p><strong>Aligment: </strong>{hero.biography.alignment}</p>
                        </div>
                        </Card.Text>
                        <Button onClick={() => removeFromTeam(hero)} variant="primary">Remove from Team</Button>
                    </Card.Body>
                </Card>
            </Link>
        )
        :
        (
            <Card className="card">
                <Card.Img className="Card-image" variant="top" src={hero.image?.url}/>
                <Card.Body>
                    <Card.Title>{hero.name}</Card.Title>
                    {!teamFull ?
                        <Button onClick={() => addToTeam(hero,alignments)} variant="primary">Add to Team</Button>
                        : <p>Team is full!</p>
                    }
                </Card.Body>
            </Card>
        )}
    </>
    )
}

export default HeroCard;
