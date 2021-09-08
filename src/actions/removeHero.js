import {REMOVE_HERO} from './actionNames';

export function removeHero(hero) {
    return {
      type: REMOVE_HERO, payload : hero,
    };
  }

export default removeHero;