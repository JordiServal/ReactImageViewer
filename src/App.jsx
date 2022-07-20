import reactLogo from './assets/react.svg'
import ImageViewer from './components/ImageViewer'
import './App.css'

const images = [
  { src: reactLogo, alt: 'React Logo', thumb: reactLogo },
  { src: "/vite.svg", alt: 'React Logo', thumb: "/vite.svg"},
]

function App() {
  return (
    <div className="App">
      <ImageViewer images={images} />
    </div>
  )
}

export default App
