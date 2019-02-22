import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (<li key={props.pokemon.id}>
    <Link to={`/pokemon/${props.pokemon.id}`}> 
      <img className="pokemonThumbnail" src={props.pokemon.image_url}></img>
      {props.pokemon.name}
    </Link>
  </li>)
}


export default PokemonIndexItem;