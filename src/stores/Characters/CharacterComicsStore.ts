import { ComicsDataContainer } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class CharacterComicsStore {
  @observable
  characterComics: ComicsDataContainer = {
    total: 0,
    results: []
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacterComics = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const characterComics = await api.getCharacterComics(id);
      runInAction(() => {
        this.characterComics = characterComics;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const characterComicsStore = new CharacterComicsStore();

export { characterComicsStore };
