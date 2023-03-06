import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClose);
  }

  onClickHehdler = e => {
    if (e.target === e.currentTarget) {
      this.props.onToggleModal();
    }
  };

  onEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onClickHehdler}>
        <div className={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;