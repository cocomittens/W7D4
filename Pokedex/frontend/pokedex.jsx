import React from 'react'
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveAllPokemon, requestAllPokemon } from './components/actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // For testing purposes
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // 

  ReactDOM.render(<Root store={store}/>, root);
});
 