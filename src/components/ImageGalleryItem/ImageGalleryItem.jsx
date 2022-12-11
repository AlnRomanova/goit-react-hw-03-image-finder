import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({photos, openModal}) => {
  return (
    <>
      {photos.map(({id, image, modalImage}) => (
       <li className={css.galleryItem} key={id}>
         <img className={css.galleryImage} src={image} alt="" onClick={()=> openModal(modalImage)}/>
      </li>
      ))}

    </>
  );
};

export default ImageGalleryItem;
