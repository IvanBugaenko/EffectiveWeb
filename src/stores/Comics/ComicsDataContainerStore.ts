import { ComicsDataContainer } from 'api/baseTypes';
import { action, makeObservable, observable, runInAction } from 'mobx';
import api from 'api';

class ComicsDataContainerStore {
  @observable
  comicsDataContainer: ComicsDataContainer = {
    total: 0,
    results: []
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (
    limit: number,
    offset: number,
    titleStartsWith: string | null = null
  ): Promise<void> => {
    try {
      this.loading = true;
      const comicsDataContainer = await api.getComicsList(
        limit,
        offset,
        titleStartsWith
      );
      runInAction(() => {
        this.comicsDataContainer = comicsDataContainer;
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

const comicsDataContainerStore = new ComicsDataContainerStore();

export { comicsDataContainerStore };
