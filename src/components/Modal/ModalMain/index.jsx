import { useContext } from "react";
import ImageContext from "../../../contexts/imageContext";
import './style.css'
import arrowImg from '../../../assets/arrow.svg'

const ModalMain = () => {
  const {currentImage, changeCurrent} = useContext(ImageContext);

  return (
    <div className="modal-main-container">
    </div>
  )
}
export default ModalMain