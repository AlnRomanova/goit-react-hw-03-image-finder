import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';


const ImageGallery = ({photos}) => {
  return (
    <ul className={css.gallery}>
    <ImageGalleryItem  photos={photos}/>
    </ul>

  )
}

export default ImageGallery;
