import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Game from './components/Game';
import Flats from './components/Flats';
import Main from './components/Main';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        path='/'
        render={(props) => (
          <Main {...props} />
        )}
      />
      <Route
        exact={true}
        path='/game'
        render={(props) => (
          <Game {...props} />
        )}
      />
      <Route
        exact={true}
        path='/flats'
        render={(props) => (
          <Flats {...props} />
        )}
      />
      <Route render={() => <div>{'not found'}</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
