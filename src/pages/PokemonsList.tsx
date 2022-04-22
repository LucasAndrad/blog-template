import React, { useState, useEffect } from 'react';
import { useQueryPokemons } from 'src/hooks/usePokemons';

export const PokemonsList = () => {
  const {
    pokemons, isLoadingPokemons, isSuccess, isError, fetchPokemons,
  } = useQueryPokemons();

  return (
    <div>
      <h2>Pokemons List</h2>
      {isError &&
        <p>Error: Pokemons API failed</p>
      }
      {isLoadingPokemons &&
        <p>Loading ...</p>
      }
      {pokemons && pokemons.length > 0 &&
        pokemons.map((pokemon: any) => (
          <div key={JSON.stringify(pokemon)}>
            <p>{`${JSON.stringify(pokemon)}`}</p>
          </div>
        ))
      }
    </div>
  );
};
