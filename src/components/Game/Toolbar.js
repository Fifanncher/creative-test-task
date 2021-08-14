import React, {Component} from 'react';
import s from './Game.module.css';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import Time from './Time';

@inject(({GameStore}) => {
  return {
    startGame: GameStore.startGame,
    gameIsStarted: GameStore.gameIsStarted
  };
})

class Toolbar extends Component {
  render() {
    const {startGame, gameIsStarted} = this.props;

    return (
      <div className={s.toolbar}>
        <Time />
        {!gameIsStarted && (
          <Button
            onClick={startGame}
            variant='contained'
            color='secondary'
          >
            {'Старт'}
          </Button>
        )}
      </div>
    );
  }
}

Toolbar.propTypes = {
  startGame: PropTypes.func,
  gameIsStarted: PropTypes.bool
};

export default Toolbar;