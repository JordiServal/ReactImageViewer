import { useContext } from "react";
import ImageContext from "../../../contexts/imageContext";
import './style.css'
import arrowImg from '../../../assets/arrow.svg'

const ModalMain = () => {
  const {currentImage, changeCurrent, setModal} = useContext(ImageContext);

  return (
    <div className="modal-main-container">
      <img src={arrowImg} className="modal-arrow arrow-left" onClick={() => changeCurrent(false)} />
      <img src={currentImage.src} alt={currentImage.alt} className='modal-main' onClick={() => setModal(false)}/>
      <img src={arrowImg} className="modal-arrow arrow-right" onClick={() => changeCurrent(true)} />
    </div>
  )
}
export default ModalMain