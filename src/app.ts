const container: HTMLElement | any = document.getElementById("app");
const POKEMONS: number = 200;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
};

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
    <div class="card">
      <span class="card--id">#${pokemon.id}</span>
      <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
      <h1 class="card--name">${pokemon.name}</h1>
      <span class="card--details">${pokemon.type}</span>
    </div>
  `
  container.innerHTML += output;
};

// Promise<void> - do not return a value
const getPokemon = async (pokeID: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  const pokemon = await data.json();
  const pokemonType: string = pokemon.types
    .map((type: any) => type.type.name)
    .join(", ");

  const { id, name } = pokemon;
  const transformedPokemon: IPokemon = {
    id,
    name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType
  };
  console.log(transformedPokemon)

  showPokemon(transformedPokemon);
};

const fetchData = (): void => {
  for (let i = 1; i < POKEMONS; i++) {
    getPokemon(i);
  }
};

fetchData();

