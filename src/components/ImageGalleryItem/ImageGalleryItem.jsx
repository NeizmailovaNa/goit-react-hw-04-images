import React, {useState} from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(prevshowModal => !prevshowModal);
  };
  return (
    <>
      <li className={css.ImageGalleryItem} onClick={onToggleModal}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
      {showModal && (
        <Modal onToggleModal={onToggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

// class ImageGalleryItem extends React.Component {
//   state = {
//     showModal: false,
//   };

//   onToggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <li className={css.ImageGalleryItem} onClick={this.onToggleModal}>
//           <img
//             src={this.props.webformatURL}
//             alt={this.props.tags}
//             className={css.ImageGalleryItemImage}
//           />
//         </li>
//         {this.state.showModal && (
//           <Modal onToggleModal={this.onToggleModal}>
//             <img src={this.props.largeImageURL} alt={this.props.tags} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;