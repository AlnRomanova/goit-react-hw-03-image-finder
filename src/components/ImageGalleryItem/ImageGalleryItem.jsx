import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatURL }) => {
  return (
    <>
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src={webformatURL} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
