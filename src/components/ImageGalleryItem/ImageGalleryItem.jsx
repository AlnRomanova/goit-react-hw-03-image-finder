import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({image }) => {
  return (
    <>
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src={image} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
