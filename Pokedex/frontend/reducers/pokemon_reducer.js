import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, state, action.pokemon);
      console.log(nextState)
      return nextState;
    default:
      return state;
  }
}

export default pokemonReducer;