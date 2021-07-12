export default class PokeApiService {
  _apiBase = 'https://pokeapi.co/api/v2/';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPokemons = async () => {
    const res = await this.getResource(`pokemon?limit=50&offset=0/`);
    return res.results;
  };

  getPokemon = async (name) => {
    const person = await this.getResource(`pokemon/${name}/`);
    
    return this._transformPokemon(person);
  };

  getAbilities = async (url) => {
    const res = await this.getResource(`ability/${url}`);
    return res;
  };

  _transformPokemon = ({ name, types, sprites, id, height, weight }) => {
    const typesMap = types.map(({ type }) => type.name);
    const sprite = sprites.other['official-artwork'].front_default;

    return {
      name,
      types: typesMap,
      sprite,
      id,
      weight,
      height,
    };
  };
}
