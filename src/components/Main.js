import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => (
  <ul>
    <li>
      <Link to={'/game'}>
        {`1. Игра "Память"`}
      </Link>
    </li>
    <li>
      <Link to={'/flats'}>
        {'2. Небольшое приложение на фреймворке'}
      </Link>
    </li>
  </ul>
);

export default Main;
