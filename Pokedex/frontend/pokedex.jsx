import React from 'react'
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from "./util/api_util"
import { receiveAllPokemon } from "./actions/pokemon_actions"
import pokemonReducer from "./reducers/pokemon_reducer"

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.pokemonReducer = pokemonReducer;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
 