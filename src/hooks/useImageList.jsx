import { useState } from "react";

const useImageList = () => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  /**
   * @param {boolean} direction false for previous, true for next
   */
  const changeCurrent = (direction) => {
    const indexAux = currentIndex + (direction ? 1 : -1);
    if(indexAux >= 0 && indexAux < images.length) {
      setCurrentIndex();
      setCurrentImage(images[currentIndex]);
    }
  }

  return {
    images, setImages,
    modal, setModal,
    changeCurrent
  }
}

export {useImageList}