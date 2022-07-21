import { useContext } from "react";
import ImageContext from "../../../contexts/imageContext";
import './style.css'

const ModalThumbnail = () => {
  const {images, currentIndex} = useContext(ImageContext);

  return (
    <div className="modal-thumb-container">
      {
        images.map((image, index) => <img key={index} src={image.thumb && image.thumb !=='' ? image.thumb : image.src} alt={image.alt} className={'modal-thumb '} />)
      }
    </div>
  )
}
export default ModalThumbnail