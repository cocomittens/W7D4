import { RECEIVE_POKEMON } from '../components/actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  let nextState = state;
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON:
      console.log(action.items)
      let newItems = (action.pokemon.item_ids).map(id => ({
        [id]: action.items[id]
      }))
      for(let i = 0; i < newItems.length; i++ ){
        nextState = Object.assign({}, nextState, newItems[i] );
      }
      return nextState;
    default:
      return state;

  }
}

export default itemsReducer;

