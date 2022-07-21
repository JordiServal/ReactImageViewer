import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";

export default Image = ({ src, alt='', className='' }) => {
  const {setModal} = useContext(ImageContext);
  const click = () => {
    setModal(true);
  }
  return <img src={src} alt={alt} className={className} onClick={click} />
}