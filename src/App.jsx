import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio';

function App() {



  return (
    <div className='h-full w-full bg-[#070707]'>
      <Home />
      <About />
      <Skills />
      <Portfolio/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
