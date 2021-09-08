import {ADD_HERO} from './actionNames';


export function addHero(hero){
    return {
        type: ADD_HERO, payload: hero
    }
}

export default addHero;