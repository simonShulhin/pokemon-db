import React, { useEffect, useState } from 'react';
import PokeApiService from '../../services/pokeapi-service';

import { PokemonsList } from '../pokemons-list';
import { Spinner } from '../spinner';

export const HomePage = () => {
  const pokeApiService = new PokeApiService();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    addPokemons();
  }, []);
  const addPokemons = () => {
    pokeApiService
      .getAllPokemons()
      .then((data) => mapPokemonsToState(data))
      .then(() => setLoading(false));
  };

  const mapPokemonsToState = (data) => {
    const pokemonsArr = data.map(({ name }) => addPokemon(name));
    Promise.all(pokemonsArr).then((res) => setPokemons(res));
  };

  const addPokemon = (name) => {
    const res = pokeApiService.getPokemon(name).then((data) => data);
    return res;
  };

  console.log(pokemons);


  return loading ? <Spinner /> : <PokemonsList pokemons={pokemons} />;
};
