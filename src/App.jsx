
import ImageViewer from './components/ImageViewer'
import './App.css'

const images = [
  { src: "/react.svg", alt: 'React Logo' },
  { src: "/vite.svg", alt: 'React Logo', thumb: "/vite.svg"},
  { src: "/Giordi.jpeg", alt: 'Giordi', thumb: null},
  { src: "/Bonsai.jpeg", alt: 'Bonsai', thumb: null},
]

function App() {
  return (
    <div className="App">
      <ImageViewer images={images} />
    </div>
  )
}

export default App
