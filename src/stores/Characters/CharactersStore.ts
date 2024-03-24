import { Character } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class CharacterStore {
  @observable
  character: Character = {
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: ''
    }
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacterById = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const character = await api.getCharacterById(id);
      runInAction(() => {
        this.character = character;
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

const characterStore = new CharacterStore();

export { characterStore };
