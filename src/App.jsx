import HeroSection from './compontents/HeroSection';
import NavBar from './compontents/NavBar';
import Dishes from './compontents/Dishes';
import About from './compontents/About';
import Mission from './compontents/Mission';

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection /> 
      <NavBar />
      <Dishes/>
      <About />  
      <Mission />
    </main>
  )
}

export default App;
