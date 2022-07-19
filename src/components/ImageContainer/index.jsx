import Image from '../Image';

const ImageContainer = ({ images }) => {
  const { setImages } = useImageList();
  return <>
  { images.map((img, index) => <Image key={index} src={img.src} className="logo" alt={img.alt} />)}
  </>
  
}

export default ImageContainer;