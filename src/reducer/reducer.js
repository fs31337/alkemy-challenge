import {ADD_HERO, REMOVE_HERO} from '../actions/actionNames';

const team = {
    heros: [],
}

function reducer(state = team, action){
    console.log(action,"action reducer")
    console.log(state,"reducer state")
    switch (action.type){
        case ADD_HERO:{
            return {
                ...state,
                heros: state.heros.concat(action.payload),
            }
        }
        case REMOVE_HERO:{
            return {
                ...state,
                heros: state.heros.filter((hero) => hero.id !== action.payload.id),
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;