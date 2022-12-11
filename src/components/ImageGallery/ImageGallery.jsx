import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';


const ImageGallery = ({photos, openModal}) => {
  return (
    <ul className={css.gallery}>
    <ImageGalleryItem  photos={photos} onClick={() => openModal(this.largeImage)} />
    </ul>

  )
}

export default ImageGallery;
