import {ImageProvider} from '../../contexts/imageContext';
import ImageContainer from '../ImageContainer';

const ImageViewer = ({ images }) => {
  return (
    <ImageProvider images={images}>
      <ImageContainer/>
    </ImageProvider>
  )
}

export default ImageViewer;