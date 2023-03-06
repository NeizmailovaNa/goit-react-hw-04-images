import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

const Button = props => {
  return (
    <button
      type="button"
      className={css.Button}
      onClick={props.onLoadMoreHendler}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMoreHendler: PropTypes.func.isRequired,
};

export default Button;