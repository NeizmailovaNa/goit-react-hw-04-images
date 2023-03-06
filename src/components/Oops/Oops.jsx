import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';
const Oops = props => {
  return (
    <p
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        font: 'inherit',
        fontSize: '20px',
      }}
    >
      Oops! Sorry, we couldnt find:
      <Loader></Loader>
      <span>"{props.imgSearchName}"</span>
      Try to enter something else.
    </p>
  );
};

Oops.propTypes = {
  imgSearchName: PropTypes.string.isRequired,
};

export default Oops;