import React from 'react';
import {Avatar, CardHeader, Tooltip} from '@material-ui/core';
import s from './FlatCard.module.css';
import PropTypes from 'prop-types';

const CardHeaderView = (props) => {
  const {
    attributes: {
      title,
      address
    },
    relationships
  } = props;

  const realtor = relationships.type === 'agent' ?
    `${relationships.attributes.last_name} ${relationships.attributes.first_name}` :
    null;
  const realtorShort = (realtor && realtor.split(/\s+/).map((word) => word[0]))
    .join('') || null;

  return (
    <CardHeader
      avatar={(
        <Tooltip title={realtor} arrow={true}>
          <Avatar>
            {realtorShort || 'Агент не указан'}
          </Avatar>
        </Tooltip>
      )}
      className={s.title}
      title={title}
      subheader={`${address.city}, ${address.street} ${address.house}, ${address.room}`}
    />
  );
};

CardHeaderView.propTypes = {
  relationships: PropTypes.object,
  attributes: PropTypes.object
};

export default CardHeaderView;
