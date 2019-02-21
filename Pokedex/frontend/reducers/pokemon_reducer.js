import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util'
import {merge} from 'lodash'

const pokemonReducer = (state, action) => {
  let nextState = {}
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let pokemon = setTimeout(fetchAllPokemon(), 2000);
      console.log(pokemon.responseJSON);
      nextState = merge({}, state, pokemon.responseJSON);
      return nextState;
    default:
      return state;
  }
}

export default pokemonReducer;