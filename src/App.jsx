import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Image from './components/Image'
import './App.css'

const images = [
  { src: reactLogo, alt: 'React Logo' },
  { src: "/vite.svg", alt: 'React Logo' },
]

function App() {
  return (
    <div className="App">
      { images.map((img, index) => <Image key={index} src={img.src} className="logo" alt={img.alt} />)}
    </div>
  )
}

export default App
