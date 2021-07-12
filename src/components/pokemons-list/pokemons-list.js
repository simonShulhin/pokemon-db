import React, { useEffect, useState } from 'react';
import { PokemonsListItem } from '../pokemons-list-item';
import './pokemons-list.scss';
import { SelectQuantity } from '../select-quantity';
import { TypeFilter } from '../type-filter/type-filter';
import { SearchInput } from '../search-input';
import { SortList } from '../sort-list';

export const PokemonsList = ({ pokemons }) => {
  const [quantity, setQuantity] = useState(10);
  const [type, setType] = useState('');
  const [pokemonsTypes, setPokemonsTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    setPokemonsTypes([
      ...new Set(
        pokemons
          .map(({ types }) => types)
          .flat()
          .sort()
      ),
    ]);
  }, [pokemons]);

  const onQuantityChange = (value) => {
    setQuantity(value);
  };

  const onTypeChange = (value) => {
    setType(value);
  };

  const onSearchChange = (value) => {
    setSearch(value);
  };

  const onSortChange = (value) => {
    setSortType(value);
  };

  const sortByValue = (value) => {
    switch (value) {
      case 'Highest':
        filteredSearch.reverse();
        return filteredSearch;
      case 'Z-A':
        filteredSearch.sort((a, b) => (a.name > b.name ? -1 : a.name > b.name ? 1 : 0));
        return filteredSearch;
      case 'A-Z':
        filteredSearch.sort((a, b) => (a.name < b.name ? -1 : a.name < b.name ? 1 : 0));
        return filteredSearch;

      default:
        return filteredSearch;
    }
  };

  const filteredType = type !== '' ? pokemons.filter((pokemon) => pokemon.types.includes(type)) : pokemons;

  const filteredSearch = filteredType.filter((pokemon) => pokemon.name.indexOf(search) !== -1);

  const filteredQuantity = sortByValue(sortType).filter((pokemon, i) => i < quantity);

  const mapPokemons = filteredQuantity.map((pokemon) => <PokemonsListItem key={pokemon.id} pokemon={pokemon} />);

  return (
    <div className='pokemons-list album py-5 bg-light'>
      <div className='container'>
        <div className='search-container'>
          <TypeFilter types={pokemonsTypes} handleChange={onTypeChange} />
          <SearchInput handleChange={onSearchChange} />
          <SortList handleChange={onSortChange} />
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>{mapPokemons}</div>
        <SelectQuantity quantity={quantity} handleChange={onQuantityChange} />
      </div>
    </div>
  );
};
