import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => (
  <div style={{textAlign: 'center'}}>
    <div>
      <Link to={'/game'}>
        <h1>{`1. Игра "Память"`}</h1>
      </Link>
    </div>
    <div>
      <Link to={'/flats'}>
        <h1>{'2. Небольшое приложение на фреймворке'}</h1>
      </Link>
    </div>
  </div>
);

export default Main;
