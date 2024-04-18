
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  }) 
  console.log(mousePosition)


  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition(prevValue => ({
        ...prevValue,
        x: e.clientX,
        y: e.clientY,
      }))
    } 

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.addEventListener('mousemove', mouseMove)
    }
  },[])

  return (
    <div className='h-full w-full bg-[#070707]'>
      <div className='w-8 h-8 rounded-full bg-white fixed top-0 left-0'></div>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
