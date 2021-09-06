import axios from 'axios';
// require('dotenv').config();
// const { API_KEY, API_URL } = process.env;

    const getTeam = () => {
        let team = {
            heroes : [],
            goods : 0,
            bads : 0,
        };
        let teamFull = team.heroes.length === 6;
        let id = 1;
        // while (!teamFull){
            axios.get(`https://www.superheroapi.com/api.php/3043805035905321/${id}`)
            .then(response => console.log(response,"response"))
            // teamFull = true;
        // }
    }

    export default getTeam;