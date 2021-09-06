import {ADD_HERO, DELETE_HERO} from '../actions/actionNames';

const team = {
    heroes: [],
    goods : 0,
    bads : 0,
}

function reducer(state = team, action){
    switch (action.type){
        case ADD_HERO:{
            return {
                ...state,
                
            }
        }
    }
}