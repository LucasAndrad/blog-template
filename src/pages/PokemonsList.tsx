import React, { useState, useEffect } from 'react';
import { getPokemons } from 'src/hooks/usePokemons';

export const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const requestPokemons = async () => {
      const list = await getPokemons();
      setPokemons(list);
      setLoading(false);
    };
    requestPokemons();
  }, []);

  return (
    <div>
      <h2>Pokemons List</h2>
      {loading &&
        <p>Loading ...</p>
      }
      {pokemons.length > 0 &&
        pokemons.map((pokemon: any) => (
          <div key={JSON.stringify(pokemon)}>
            <p>{`${JSON.stringify(pokemon)}`}</p>
          </div>
        ))
      }
    </div>
  );
};
