import React, {Component} from 'react';
import s from './Game.module.css';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';

@inject(({GameStore}) => {
  return {
    time: GameStore.time
  };
})

class TimeView extends Component {
  render() {
    const {time} = this.props;

    return (
      <div className={s.time}>{time}</div>
    );
  }
}

TimeView.propTypes = {
  time: PropTypes.number
};

export default TimeView;
