import {observable, action, computed, reaction, makeObservable, toJS} from 'mobx';
import cardsInit from './Cards';

class GameStore {
  actions = [];
  cardNames = new Set();

  @observable isShown = [];
  @observable cards = []
  @observable deletedCards = [];
  @observable gameIsStarted = false;
  @observable seconds = 0;
  @observable results = [];

  constructor() {
    makeObservable(this);
    this.generateCards();

    reaction(
      () => this.deletedCards.length === this.cards.length,
      this.endGame
    );
  }

  @computed get time() {
    if (this.seconds < 60) {
      return `${this.seconds}s`;
    }
    const minute = Math.floor(this.seconds / 60 % 60);
    const second = this.seconds % 60;

    if (this.seconds >= 60) {
      return `${minute}m ${second}s `;
    }

    const hour = Math.floor(this.seconds / 3600);

    return `${hour}h  ${minute}m ${second}s `;
  }

  @action startGame = () => {
    this.gameIsStarted = true;
    this.seconds = 0;
    this.startTimer = setInterval(() => this.setTime(), 1000);
  }

  @action endGame = () => {
    clearInterval(this.startTimer);
    this.closeCards();

    if (this.seconds) {
      this.results.push(this.time);
    }

    this.gameIsStarted = false;
    this.deletedCards = [];
    this.seconds = 0;
    this.generateCards();
  }

  @action setTime = () => {
    this.seconds += 1;
  }

  @action generateCards = () => {
    this.cards = cardsInit
      .map((item) => {
        return {sort: Math.random(), ...item};
      })
      .sort((a, b) => a.sort - b.sort);
  }

  @action showCard = (item, icon) => {
    if (this.isShown.length === 2) {
      this.actions.forEach((timeout) => clearTimeout(timeout));
      this.closeCards();
    }

    this.isShown = [item, ...this.isShown];
    this.cardNames.add(icon);

    if (this.isShown.length === 2) {
      this.checkCards();
    } else {
      this.actions.push(setTimeout(this.closeCards, 5000));
    }
  }

  @action deleteCard = (values) => {
    this.deletedCards = [...values, ...this.deletedCards];
  }

  @action checkCards = () => {
    if (this.cardNames.size === 1) {
      const itemsToDelete = toJS(this.isShown);

      setTimeout(() => this.deleteCard(itemsToDelete), 500);
    }
  }

  @action closeCards = () => {
    this.isShown = [];
    this.cardNames.clear();
  }
}

export default GameStore;
