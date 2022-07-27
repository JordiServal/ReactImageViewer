import { useContext } from "react";
import ImageContext from "../../../contexts/imageContext";
import './style.css'
import arrowImg from '../../../assets/arrow.svg'

const ModalMain = () => {
  const {currentImage, changeCurrent, setModal, thumbClass, thumbImageClass, showCarrussel} = useContext(ImageContext);

  return (
    <div className={thumbClass !== '' ? thumbClass : "modal-main-container"}>
      {showCarrussel && <img src={arrowImg} className="modal-arrow arrow-left" onClick={() => changeCurrent(false)} />}
      <img src={currentImage.src} alt={currentImage.alt} className={thumbImageClass !== '' ? thumbImageClass: 'modal-main'} onClick={() => setModal(false)}/>
      {showCarrussel && <img src={arrowImg} className="modal-arrow arrow-right" onClick={() => changeCurrent(true)} />}
    </div>
  )
}
export default ModalMain