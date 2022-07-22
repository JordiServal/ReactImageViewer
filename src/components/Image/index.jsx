import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";

export default Image = ({ src, alt='', className='', index }) => {
  const {setModal, setCurrentIndex} = useContext(ImageContext);
  const click = () => {
    setCurrentIndex(index);
    setModal(true);
  }
  return <img src={src} alt={alt} className={className} onClick={click} />
}