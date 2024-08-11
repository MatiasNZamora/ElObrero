import HeroSection from './compontents/HeroSection';
import NavBar from './compontents/NavBar';
import Dishes from './compontents/Dishes';
import About from './compontents/About';
import Mission from './compontents/Mission';
import Experience from './compontents/Experience';
import Review from './compontents/Review';

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection /> 
      <NavBar />
      <Dishes/>
      <About />  
      <Mission />
      <Experience />
      <Review /> 
    </main>
  )
};

export default App;
