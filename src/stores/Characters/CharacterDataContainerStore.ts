import { CharacterDataContainer } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class CharacterDataContainerStore {
  @observable
  characterDataContainer: CharacterDataContainer = {
    total: 0,
    results: []
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async (
    limit: number,
    offset: number,
    nameStartsWith: string | null = null
  ): Promise<void> => {
    try {
      this.loading = true;
      const characterDataContainer = await api.getCharactersList(
        limit,
        offset,
        nameStartsWith
      );
      runInAction(() => {
        this.characterDataContainer = characterDataContainer;
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

const characterDataContainerStore = new CharacterDataContainerStore();

export { characterDataContainerStore };
