import axios from "axios";

export const getPokemons = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );

  const pokemonsResults = response.data.results;

  const pokemonUrls = pokemonsResults.map((pokemon) => pokemon.url);

  const pokemonsData = await Promise.all(
    pokemonUrls.map(async (pokemonUrl) => {
      const response = await axios.get(pokemonUrl);
      return response.data;
    })
  );

  const mappedPokemons = pokemonsData.map((pokemonData) => {
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types.map(({ type }) => type.name),
      src: pokemonData.sprites.front_default,
      description: "Esto es una descripcion",
    };
  });

  return mappedPokemons;
};
