import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
  }

  componentDidMount(){
    let id = this.props.match.params.pokemonId
    this.props.requestSinglePokemon(id)
  }
}
export default PokemonDetail;