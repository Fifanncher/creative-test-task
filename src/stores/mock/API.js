import Entities from './entities.json';

const methods = {
  get: (address) => {
    switch (address) {
      case 'getObjects':
        return Entities;
      default:
        return {};
    }
  },
  post: (address, body) => {
    switch (address) {
      case 'setFavorite':
        return body;
      default:
        return {};
    }
  }
};

const API = {
  get: (address) => Promise.resolve(methods.get(address)).then(({response}) => response),
  post: (address, body) => Promise
    .resolve(methods.get(address, body))
    .then(({response}) => response)
};

export default API;
