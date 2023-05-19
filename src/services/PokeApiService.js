import axios from "axios";

export const getPokemons = async () => {
  //   const a = {};
  //   let pokemons = [];
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
  console.log(pokemonsData);
  console.log(mappedPokemons);
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then(({ data }) => {
  //     const pokemonsResults = data.results;
  //     pokemonsResults.map((pokemonResult) => {
  //       let pokemon = {
  //         id: "",
  //         name: "",
  //         height: 0,
  //         weight: 0,
  //         types: [],
  //         src: "",
  //         description: "",
  //       };
  //       pokemon.name = pokemonResult.name;
  //       axios.get(pokemonResult.url).then(({ data }) => {
  //         pokemon.id = data.id;
  //         pokemon.weight = data.weight;
  //         pokemon.height = data.height;
  //         let pokemonTypesArray = data.types;
  //         pokemonTypesArray.map(({ type }) => {
  //           pokemon.types.push(type.name);
  //         });

  //       });
  //       console.log(pokemon);
  //     });
  //   });
};
