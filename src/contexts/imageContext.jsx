import { createContext, useEffect } from "react"
import { useImageList } from "../hooks/useImageList"

const ImageContext = createContext(null)

const ImageProvider = ({
  children,
  images,
  viewImages,
  totalImages,
  containerClass,
  imageClass,
  thumbClass,
  thumbImageClass,
  showCarrusel,
}) => {
  const imageData = useImageList()
  useEffect(() => {
    // Crop images array to totalImages
    if (totalImages && images.length > totalImages)
      images = images.slice(0, totalImages)
    imageData.setImages(images)
    imageData.setViewImages(viewImages)
    imageData.setContainerClass(containerClass)
    imageData.setImageClass(imageClass)
    imageData.setThumbClass(thumbClass)
    imageData.setThumbImageClass(thumbImageClass)
    imageData.setShowCarrusel(showCarrusel)
  }, [])

  return (
    <ImageContext.Provider value={imageData}>{children}</ImageContext.Provider>
  )
}

export { ImageProvider }
export default ImageContext
