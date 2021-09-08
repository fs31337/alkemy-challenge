import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {addHero} from '../../actions/addHero';
import { useDispatch } from 'react-redux';

function HeroCard({hero,teamate,alignments,teamLength}) {
    const dispatch = useDispatch();

    function addToTeam(hero,alignments){
        alignments[hero.biography.alignment]>=3 || teamLength <= 5 ?
        alert("Team orientation is full") :
            dispatch(addHero(hero))
            alert("Added to the team")
        // console.log(alignments,"alignments")
        // console.log(hero.biography.alignment,"hero Alignments")
        // console.log(alignments[hero.biography.alignment],"good")
        }

    return (
        <>
        {teamate ? (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hero.image?.url}/>
            <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
                <Card.Text>{hero.powerstats}</Card.Text>
                <Button variant="primary">See Detail</Button>
                <Button variant="primary">Remove from Team</Button>
            </Card.Body>
            </Card>
        )
        :
        (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hero.image?.url}/>
            <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
                <Button onClick={() => addToTeam(hero,alignments)} variant="primary">Add to Team</Button>
            </Card.Body>
            </Card>
        )}
    </>
    )
}

export default HeroCard;
