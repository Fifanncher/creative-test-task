import React from 'react';
import s from './FlatsView.module.css';
import {inject} from 'mobx-react';
import FlatCard from './FlatCard';
import PropTypes from 'prop-types';

@inject(({FlatsStore}) => {
  return {
    objects: FlatsStore.objects,
    setFavorite: FlatsStore.setFavorite
  };
})

class FlatsView extends React.Component {
  render() {
    const {
      objects,
      setFavorite
    } = this.props;

    const cards = objects.map(
      (card, ind) => <FlatCard key={ind} setFavorite={setFavorite} {...card} />
    );

    return (
      <div className={s.wrapper}>
        {cards}
      </div>
    );
  }
}

FlatsView.propTypes = {
  objects: PropTypes.array,
  setFavorite: PropTypes.func
};

export default FlatsView;
