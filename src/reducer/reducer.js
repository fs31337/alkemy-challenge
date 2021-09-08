import {ADD_HERO, DELETE_HERO} from '../actions/actionNames';

const team = {
    heros: [],
}

function reducer(state = team, action){
    console.log(action,"action reducer")
    switch (action.type){
        case ADD_HERO:{
            return {
                ...state,
                heros: state.heros.concat(action.payload),
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;