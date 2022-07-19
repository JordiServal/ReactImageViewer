import { useState } from "react";

const useImageList = () => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);

  return {
    images, setImages,
    modal, setModal
  }
}

export {useImageList}