import React from 'react';
import './pokemons-list-item.scss';

export const PokemonsListItem = ({ pokemon }) => {
  const types = pokemon.types
    ? pokemon.types.map((type) => (
        <span className={`type ${type}`} key={type}>
          {type}
        </span>
      ))
    : [];

  return (
    <div className='pokemons-list-item'>
      <div className='card shadow-sm'>
        <img className='sprite' src={pokemon.sprite} alt={pokemon.name}></img>

        <div className='card-body'>
          <h4 className='order'>#{pokemon.id}</h4>
          <h1 className='name'>{pokemon.name}</h1>
          <p>
            Height: {pokemon.height} Weight: {pokemon.weight}
          </p>
          <div>{types}</div>
        </div>
      </div>
    </div>
  );
};
