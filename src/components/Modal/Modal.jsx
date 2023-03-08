import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ onToggleModal, children }) => {
  const onClickHehdler = e => {
    if (e.target === e.currentTarget) {
      onToggleModal();
    }
  };
  const onEscClose = useCallback(
    e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    },
    [onToggleModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscClose);

    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onEscClose]);
  return (
    <div className={css.overlay} onClick={onClickHehdler}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

// class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscClose);
//   }

//   onClickHehdler = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onToggleModal();
//     }
//   };

//   onEscClose = e => {
//     if (e.code === 'Escape') {
//       this.props.onToggleModal();
//     }
//   };

//   render() {
//     return (
//       <div className={css.overlay} onClick={this.onClickHehdler}>
//         <div className={css.modal}>{this.props.children}</div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   onToggleModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Modal;