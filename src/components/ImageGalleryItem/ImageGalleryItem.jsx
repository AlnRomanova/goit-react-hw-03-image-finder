import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <>
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src="" alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
