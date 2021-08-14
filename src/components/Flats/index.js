import React from 'react';
import FlatsView from './FlatsView';
import {Provider} from 'mobx-react';
import FlatsStore from '../../stores/FlatsStore';

class Flats extends React.Component {
  constructor(props) {
    super(props);
    this.FlatsStore = new FlatsStore();
  }

  render() {
    return (
      <Provider FlatsStore={this.FlatsStore}>
        <FlatsView />
      </Provider>
    );
  }
}
export default Flats;
