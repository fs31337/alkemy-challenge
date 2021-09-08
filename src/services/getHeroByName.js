import axios from 'axios';

function getHeroByName(name,setHeros) {
    axios.get(`https://www.superheroapi.com/api.php/3043805035905321/search/${name}`)
    .then(response => setHeros(response.data.results))
}

export default getHeroByName;