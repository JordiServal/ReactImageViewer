import {ImageProvider} from '../../contexts/ImageContext';
const ImageViewer = ({ images }) => {
  return <ImageProvider>
    <ImageContainer images={images} />
  </ImageProvider>
}

export default ImageViewer;