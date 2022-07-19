import { useContext } from "react";
import ImageContext from "../../contexts/imageContext";

const Modal = () => {
  const {modal} = useContext(ImageContext);
  return (<>
    {modal && <div className='modal'></div>}
  </>)
}
export default Modal