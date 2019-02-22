import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../components/actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state, action.pokemon);
      return nextState;
    case RECEIVE_POKEMON:
       nextState = Object.assign({}, state, {[action.pokemon.id]: action.pokemon});
      return nextState;
    default:
      return state;
  }
}

export default pokemonReducer;