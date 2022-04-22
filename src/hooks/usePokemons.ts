import { useQuery } from 'react-query';
import { axios } from 'src/utils/axiosMiddleware';
import { API_LINK, API_PATHS } from 'src/utils/constants';

const getPokemons = async () => {
  const link = `${API_LINK}${API_PATHS.POKEMONS}lucas`;
  const response = await axios.get(link);

  return response.data.results;
};

export const useQueryPokemons = () => {
  const {
    data: pokemons,
    isFetching: isLoadingPokemons,
    isError,
    isSuccess,
    refetch: fetchPokemons,
  } = useQuery(
    'query-pokemons',
    getPokemons,
    { retry: false }
  );

  return {
    pokemons,
    isLoadingPokemons,
    isError,
    isSuccess,
    fetchPokemons,
  };
};
