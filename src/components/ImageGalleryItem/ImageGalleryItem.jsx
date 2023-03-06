import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.onToggleModal}>
          <img
            src={this.props.webformatURL}
            alt={this.props.tags}
            className={css.ImageGalleryItemImage}
          />
        </li>
        {this.state.showModal && (
          <Modal onToggleModal={this.onToggleModal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;