import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imgsToDisplay }) => {
  return (
    <ul className={css.ImageGallery}>
      {imgsToDisplay.map(img => {
        return (
          <ImageGalleryItem
            webformatURL={img.webformatURL}
            tags={img.tags}
            key={img.id}
            largeImageURL={img.largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgsToDisplay: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;