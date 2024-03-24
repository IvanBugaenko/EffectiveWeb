import { CharacterDataContainer } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class ComicsCharactersStore {
  @observable
  comicsCharacters: CharacterDataContainer = {
    total: 0,
    results: []
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsCharacters = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const comicsCharacters = await api.getComicsCharacters(id);
      runInAction(() => {
        this.comicsCharacters = comicsCharacters;
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

const comicsCharactersStore = new ComicsCharactersStore();

export { comicsCharactersStore };
