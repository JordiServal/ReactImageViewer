import { useEffect, useState } from "react";

const useImageList = () => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  /**
   * @param {boolean} direction false for previous, true for next
   */
  const changeCurrent = (direction) => {
      setCurrentIndex(Math.abs((currentIndex + (direction ? 1 : -1)) % images.length));
  }

  useEffect(() => {
    if(images[currentIndex]) setCurrentImage(images[currentIndex]);    
  }, [currentIndex]);

  useEffect(() => {
    if(images.length > 0) setCurrentImage(images[currentIndex]);
  }, [images]);

  return {
    images, setImages,
    modal, setModal,
    changeCurrent,
    currentImage,
    currentIndex
  }
}

export {useImageList}