import axios from 'axios';
const { API_KEY } = process.env;

    function getHeroByName(name) {
        let heroByName = axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/search/${name}`)
        .then(response => response.data)
        return heroByName;
    }

export default getHeroByName;