import { useState, useEffect, React } from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import './detail.styles.css'


function Detalle() {
    const [hero, setHero] = useState('');
    const { id } = useParams();
    const redirect = useHistory();

    console.log(hero,"HERO DETAIL")

    useEffect(() => {
            axios.get(`https://www.superheroapi.com/api.php/3043805035905321/${id}`)
            .then(response => setHero(response.data))
        }, [])

    return (
        <>
        {hero ? (
            <Card className="cardDetail">
            <Card.Img variant="top" src={hero.image?.url}/>
            <Card.Body>
                <Card.Title className="titleDetail">{hero.name}</Card.Title>
                <Card.Text className="detailText">
                <div>
                    <div>
                        <p><strong>Alias: </strong>{hero.biography.aliases[0]}</p>
                        <p><strong>Weight: </strong>{hero.appearance.weight[1]}</p>
                        <p><strong>Height: </strong>{hero.appearance.height[1]}</p>
                    </div>
                    <div>
                        <p><strong>Eyes Color: </strong>{hero.appearance["eye-color"]}</p>
                        <p><strong>Hair Color: </strong>{hero.appearance["hair-color"]}</p>
                    </div>
                </div>
                    <p><strong>Work Place: </strong>{hero.work.base}</p>
                </Card.Text>
                <Button onClick={() => redirect.push("/")} variant="primary">Get Back</Button>
            </Card.Body>
            </Card>
            ):( <Button onClick={() => redirect.push("/")} variant="primary">Error Get Back</Button>)
        }
        </>
    )
}

export default Detalle
