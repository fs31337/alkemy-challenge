import React from 'react';
import {Card, Button} from 'react-bootstrap';

function HeroCard({hero,teamate}) {
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
                <Button variant="primary">Add to Team</Button>
            </Card.Body>
            </Card>
        )}
    </>
    )
}

export default HeroCard;
