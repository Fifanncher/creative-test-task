import React, {Component} from 'react';
import s from './Game.module.css';
import cardsImg from './cards';
import {inject} from 'mobx-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';

@inject(({GameStore}) => {
  return {
    isShown: GameStore.isShown,
    showCard: GameStore.showCard,
    deletedCards: GameStore.deletedCards,
    cards: GameStore.cards,
    gameIsStarted: GameStore.gameIsStarted,
    results: GameStore.results
  };
})
class GameView extends Component {
  render() {
    const {
      isShown,
      showCard,
      deletedCards,
      cards,
      gameIsStarted,
      results
    } = this.props;

    const cardsBlock = cards.map(({val, icon}) => {
      if (deletedCards.includes(val)) {
        return <div key={val} className={s.card} />;
      }

      if (isShown.includes(val)) {
        const imgIcon = <img className={s.imgCard} src={cardsImg[icon]} alt='value' />;

        return (
          <div
            key={val}
            className={classNames(s.openedCard, s.card)}
          >
            {icon ? imgIcon : val}
          </div>
        );
      }

      return (
        <div
          key={val}
          onClick={() => gameIsStarted && showCard(val, icon)}
          className={classNames(s.cardClosed, s.card)}
        />
      );
    });

    return (
      <div className={s.wrapper}>
        <Toolbar />
        <div className={s.container}>{cardsBlock}</div>
        <div className={s.results}>
          {'Результаты'}
          {results.length ?
            results.map((result, ind) => <span key={ind}>{result}</span>) :
            <span>{'-'}</span>}
        </div>
      </div>
    );
  }
}

GameView.propTypes = {
  isShown: PropTypes.array,
  showCard: PropTypes.func,
  deletedCards: PropTypes.object,
  cards: PropTypes.array,
  gameIsStarted: PropTypes.bool,
  results: PropTypes.array
};

export default GameView;
