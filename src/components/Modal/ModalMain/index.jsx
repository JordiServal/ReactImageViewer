import { useContext } from "react"
import ImageContext from "../../../contexts/imageContext"
import "./style.css"
import arrowImg from "../../../assets/arrow.svg"

const ModalMain = () => {
  const {
    currentImage,
    changeCurrent,
    setModal,
    thumbClass,
    thumbImageClass,
    showCarrusel,
  } = useContext(ImageContext)

  return (
    <div
      className={thumbClass !== "" ? thumbClass : "modal_main_container"}
    >
      {showCarrusel && (
        <img
          src={arrowImg}
          className={`modal_arrow arrow_left`}
          onClick={() => changeCurrent(false)}
        />
      )}
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className={thumbImageClass !== "" ? thumbImageClass : "modal_main"}
        onClick={() => setModal(false)}
      />
      {showCarrusel && (
        <img
          src={arrowImg}
          className={`modal_arrow arrow_right`}
          onClick={() => changeCurrent(true)}
        />
      )}
    </div>
  )
}
export default ModalMain
