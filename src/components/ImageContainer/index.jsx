import Image from '../Image';
import {useImageList} from '../../hooks/useImageList';
import Modal from '../Modal';
import { useContext, useEffect } from 'react';
import ImageContext from '../../contexts/imageContext';

const ImageContainer = () => {
  const {images}= useContext(ImageContext);
  
  return <>
  <div className='container'>
    { images.map((img, index) => <Image key={index} src={img.src} className="logo" alt={img.alt} />)}
  </div>
  <Modal />
  </>
  
}

export default ImageContainer;