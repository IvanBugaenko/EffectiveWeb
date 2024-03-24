import { Comics } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class ComicsStore {
  @observable
  comics: Comics = {
    id: 0,
    title: '',
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
  getComicsById = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const comics = await api.getComicsById(id);
      runInAction(() => {
        this.comics = comics;
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

const comicsStore = new ComicsStore();

export { comicsStore };
