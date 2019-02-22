import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route} from 'react-router-dom';
class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <section className="pokedex">
        <Route path={"/pokemon/:pokemonId"}/>
        <ul>
          {pokemonItems}
        </ul>
      </section>)
  }

  componentDidMount() {
    // console.log(this.props.requestAllPokemon());
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;