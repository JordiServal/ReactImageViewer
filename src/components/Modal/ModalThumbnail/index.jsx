import { useContext } from "react"
import ImageContext from "../../../contexts/imageContext"
import style from "./style.module.css"

const ModalThumbnail = () => {
  const { images, currentIndex, setCurrentIndex } = useContext(ImageContext)

  return (
    <div className={style.modal_thumb_container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumb && image.thumb !== "" ? image.thumb : image.src}
          alt={image.alt}
          className={`${style.modal_thumb} ${
            index === currentIndex ? style.highlight : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  )
}
export default ModalThumbnail
