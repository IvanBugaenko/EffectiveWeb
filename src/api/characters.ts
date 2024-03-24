import axios from 'api/helpers/axios';
import {
  Character,
  CharacterDataContainer,
  ComicsDataContainer
} from './baseTypes';

async function getCharactersList(
  limit: number,
  offset: number,
  nameStartsWith: string | null = null
): Promise<CharacterDataContainer> {
  const response = await axios.get('/characters', {
    params: {
      nameStartsWith: nameStartsWith,
      limit: limit,
      offset: offset
    }
  });
  const charactersData = response.data.data;
  return charactersData;
}

async function getCharacterById(id: number): Promise<Character> {
  const response = await axios.get(`/characters/${id}`);
  const characterData = response.data.results;
  return characterData[0];
}

async function getCharacterComics(id: number): Promise<ComicsDataContainer> {
  const response = await axios.get(`characters/${id}/comics`);
  const characterComicsData = response.data.data;
  return characterComicsData;
}

export { getCharactersList, getCharacterById, getCharacterComics };
