import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({photos}) => {
  return (
    <>
      {photos.map(({id, image}) => (
       <li className={css.galleryItem} key={id}>
         <img className={css.galleryImage} src={image} alt="" />
      </li>
      ))}

    </>
  );
};

export default ImageGalleryItem;
