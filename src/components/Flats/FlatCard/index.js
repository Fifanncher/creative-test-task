import React from 'react';
import s from './FlatCard.module.css';
import {CardActions, IconButton, Card, CardMedia} from '@material-ui/core';
import CardHeader from './CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import noImage from './noImage.png';
import CardContent from './CardContent';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FlatCard = (props) => {
  const {
    id,
    type,
    inFavorite,
    attributes,
    relationships,
    setFavorite
  } = props;

  const handlerSetFavorite = () => setFavorite(id, !inFavorite);

  return (
    <div className={s.card}>
      <Card>
        <CardHeader
          attributes={attributes}
          relationships={relationships}
        />
        <CardMedia
          className={s.image}
          component={'img'}
          image={noImage}
          src={noImage}
          title='noImage'
        />
        <CardContent type={type} attributes={attributes} />
        <CardActions>
          <IconButton onClick={handlerSetFavorite} size={'medium'}>
            <FavoriteIcon className={classNames(s.icon, {[s.inFavorite]: inFavorite})} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

FlatCard.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  setFavorite: PropTypes.func,
  inFavorite: PropTypes.bool,
  attributes: PropTypes.object,
  relationships: PropTypes.object
};

export default FlatCard;
