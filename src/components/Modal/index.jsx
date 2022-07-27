import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";
import './style.css'
import closeImg from '../../assets/close.svg'
import ModalThumbnail from './ModalThumbnail';
import ModalMain from './ModalMain';

const Modal = () => {
  const {modal, setModal, showCarrussel} = useContext(ImageContext);
  const close = () => {
    setModal(false);
  }
  return (<>
    {modal && 
      <div className='modal'>
        <div className='modal-shadow' onClick={close}/>
        <div className='modal-content'>
          <img src={closeImg} className="modal-close" onClick={close}/>
          <ModalMain/>
          {showCarrussel && <ModalThumbnail/>}
        </div>
      </div>}
  </>)
}
export default Modal