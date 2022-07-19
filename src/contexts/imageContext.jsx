import {createContext, useEffect} from 'react'
import {useImageList} from '../hooks/useImageList'


const ImageContext = createContext(null)

const ImageProvider = ({children, images}) => {
  const imageData = useImageList()
  useEffect(() => {
    imageData.setImages(images)
  }, [])

  return (
    <ImageContext.Provider value={imageData}>
      {children}
    </ImageContext.Provider>
  )
}

export { ImageProvider }
export default ImageContext;