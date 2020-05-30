const container: HTMLElement | any = document.getElementById("app");
const pokemons: number = 100;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}


const fetchData = (): void => {
  for (let i = 1; i < pokemons; i++) {
    getPokemon(i);
  }
}

// Promise<void> - do not return a value
const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();
  const pokemonType: string = pokemon.types
      .map((type: any) => type.type.name)
      .join(", ");
      console.log(pokemonType);
}

