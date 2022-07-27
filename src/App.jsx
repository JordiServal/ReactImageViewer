
import ImageViewer from './components/ImageViewer'
import './App.css'

const images = [
  { src: "/react.svg", alt: 'React Logo' },
  { src: "https://placekitten.com/300/2000", alt: 'React Logo', thumb: "https://www.fillmurray.com/2040/360"},
  { src: "https://placekitten.com/2000/200", alt: 'Giordi', thumb: null},
  { src: "/Bonsai.jpeg", alt: 'Bonsai', thumb: null},
]

function App() {
  return (
    <div className="App">
      <ImageViewer images={images} showCarrussel={false} />
    </div>
  )
}

export default App
