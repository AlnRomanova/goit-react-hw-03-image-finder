import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';


const ImageGallery = ({photos, openModal}) => {
  return (
    <ul className={css.gallery}>
    <ImageGalleryItem  photos={photos} openModal={openModal}/>
    </ul>

  )
}

export default ImageGallery;
