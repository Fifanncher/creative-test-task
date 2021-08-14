import React from 'react';
import {CardContent} from '@material-ui/core';
import s from './FlatCard.module.css';
import PropTypes from 'prop-types';

const CardContentView = (props) => {
  const {
    type,
    attributes: {
      area,
      unit,
      rooms
    }
  } = props;

  return (
    <CardContent className={s.content}>
      <span>{`Тип: ${type}`}</span>
      <span>{`Кол-во комнат: ${rooms}`}</span>
      <span>{`Площадь: ${area} ${unit}`}</span>
    </CardContent>
  );
};

CardContentView.propTypes = {
  type: PropTypes.string,
  area: PropTypes.number,
  unit: PropTypes.string,
  rooms: PropTypes.number,
  attributes: PropTypes.object
};

export default CardContentView;
