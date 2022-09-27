import { ImageProvider } from "../../contexts/imageContext"
import ImageContainer from "../ImageContainer"
 
/**
 *
 * @param {Array} images List of images
 * @param {int} containerImages amount of images shown in main container
 * @param {int} totalImages amount of images in the list
 * @param {string} containerClass class name for main container
 * @param {string} imageClass class name for image
 * @param {string} thumbClass class name for thumbnail
 * @param {string} thumbImageClass class name for thumbnail image
 * @param {string} thumbMainClass class name for thumbnail image
 *
 * @returns
 */
const ImageViewer = ({
  images,
  viewImages = 0,
  totalImages = 0,
  containerClass = "",
  imageClass = "",
  thumbClass = "",
  thumbImageClass = "",
  thumbMainClass = "",
  showCarrusel = true,
}) => {
  return (
    <ImageProvider
      images={images}
      viewImages={viewImages}
      totalImages={totalImages}
      containerClass={containerClass}
      imageClass={imageClass}
      thumbClass={thumbClass}
      thumbImageClass={thumbImageClass}
      thumbMainClass={thumbMainClass}
      showCarrusel={showCarrusel}
    >
      <ImageContainer />
    </ImageProvider>
  )
}

export default ImageViewer
