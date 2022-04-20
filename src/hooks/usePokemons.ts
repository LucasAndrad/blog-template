import { axios } from 'src/utils/axiosMiddleware';
import { API_LINK, API_PATHS } from 'src/utils/constants';

export const getPokemons = async () => {
  const link = `${API_LINK}${API_PATHS.POKEMONS}`;
  const response = await axios.get(link);

  return response.data.results;
};
