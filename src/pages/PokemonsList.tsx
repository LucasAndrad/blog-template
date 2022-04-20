import React, { useState, useEffect } from 'react';
import { getPokemons } from 'src/hooks/usePokemons';

export const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const requestPokemons = async () => {
      const list = await getPokemons();
      setPokemons(list);
    };
    requestPokemons();
  }, []);

  return (
    <div>
      <h2>Pokemons List</h2>
      {pokemons.length &&
        pokemons.map((pokemon: any) => (
          <div key={JSON.stringify(pokemon)}>
            <p>{`${JSON.stringify(pokemon)}`}</p>
          </div>
        ))
      }
    </div>
  );
};
