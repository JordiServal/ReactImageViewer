import Image from "../Image"
import { useImageList } from "../../hooks/useImageList"
import Modal from "../Modal"
import { useContext, useEffect } from "react"
import ImageContext from "../../contexts/imageContext"
import "./style.css"

const ImageContainer = () => {
  const { images, viewImages, containerClass, imageClass } =
    useContext(ImageContext)

  return (
    <>
      <div className={containerClass !== "" ? containerClass : "container"}>
        {images.map((img, index) => {
          if (!viewImages || (viewImages && index < viewImages))
            return (
              <Image
                key={index}
                src={img.src}
                className={imageClass !== "" ? imageClass : "logo"}
                alt={img.alt}
                index={index}
              />
            )
          return null
        })}
      </div>
      <Modal />
    </>
  )
}

export default ImageContainer
