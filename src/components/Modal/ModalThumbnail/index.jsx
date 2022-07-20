import { useContext } from "react";
import ImageContext from "../../../contexts/imageContext";
import './style.css'
import arrowImg from '../../../assets/arrow.svg'

const ModalThumbnail = () => {
  const {modal, setModal, images} = useContext(ImageContext);

  return (
    <div className="modal-thumb-container">
      {
        images.map((image, index) => <img key={index} src={image.thumb} alt={image.alt} className='modal-thumb' />)
      }
    </div>
  )
}
export default ModalThumbnail