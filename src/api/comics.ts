import axios from 'api/helpers/axios';
import {
  Comics,
  ComicsDataContainer,
  CharacterDataContainer
} from './baseTypes';

async function getComicsList(
  limit: number,
  offset: number,
  titleStartsWith: string | null = null
): Promise<ComicsDataContainer> {
  const response = await axios.get('/comics', {
    params: {
      titleStartsWith: titleStartsWith,
      limit: limit,
      offset: offset
    }
  });
  const charactersData = response.data.data;
  return charactersData;
}

async function getComicsById(id: number): Promise<Comics> {
  const response = await axios.get(`/comics/${id}`);
  const characterData = response.data.results;
  return characterData[0];
}

async function getComicsCharacters(
  id: number
): Promise<CharacterDataContainer> {
  const response = await axios.get(`comics/${id}/characters`);
  const characterComicsData = response.data.data;
  return characterComicsData;
}

export { getComicsList, getComicsById, getComicsCharacters };
