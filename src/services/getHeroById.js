import axios from 'axios';
const { API_KEY } = process.env;

    function getHeroById(id) {
        let heroById = axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/${id}`)
        .then(response => response.data)
        return heroById;
    }

export default getHeroById;