import {observable, autorun, makeObservable, action} from 'mobx';
import API from './mock/API';

class FlatsStore {
  @observable objects = [];

  constructor() {
    makeObservable(this);

    autorun(this.getObjects);
  }

  @action setObjects = (objects) => {
    this.objects = objects;
  }

  getObjects = async() => {
    try {
      const result = await API.get('getObjects');

      this.setObjects(result);
    } catch(_) {
      this.setObjects([]);
    }
  }

  setFavorite = async(objectId, isFavorite) => {
    try {
      await API.post('setFavorite', {
        userId: 1,
        objectId,
        isFavorite
      });

      const result = this.objects.map(({id, ...restParams}) => {
        if (id === objectId) {
          return {id, ...restParams, inFavorite: isFavorite};
        }

        return {id, ...restParams};
      });

      this.setObjects(result);

    } catch(_) {
      this.setObjects([]);
    }
  }
}

export default FlatsStore;
