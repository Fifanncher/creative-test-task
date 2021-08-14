import React from 'react';
import GameView from './GameView';
import {Provider} from 'mobx-react';
import GameStore from '../../stores/GameStore';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.GameStore = new GameStore();
  }

  render() {
    return (
      <Provider GameStore={this.GameStore}>
        <GameView />
      </Provider>
    );
  }
}
export default Game;
