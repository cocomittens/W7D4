import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util'

const pokemonReducer = (state, action) => {
  let nextState = {}
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = fetchAllPokemon();
      nextState = nextState.responseJSON;
      return nextState;
    default:
      return state;
  }
}

export default pokemonReducer;