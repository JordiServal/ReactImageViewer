import { useContext } from "react"
import ImageContext from "../../contexts/imageContext"
import style from "./style.module.css"
import closeImg from "../../assets/close.svg"
import ModalThumbnail from "./ModalThumbnail"
import ModalMain from "./ModalMain"

const Modal = () => {
  const { modal, setModal, showCarrussel } = useContext(ImageContext)
  const close = () => {
    setModal(false)
  }
  return (
    <>
      {modal && (
        <div className={style.modal}>
          <div className={style.modal_shadow} onClick={close} />
          <div className={style.modal_content}>
            <img src={closeImg} className={style.modal_close} onClick={close} />
            <ModalMain />
            {showCarrussel && <ModalThumbnail />}
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
