import { useState } from "react";

export default useImageList = () => {
  const [images, setImages] = useState([]);

  return {
    iamges, setImages,
  }
}