import HeroSection from './compontents/HeroSection';
import NavBar from './compontents/NavBar';
import Dishes from './compontents/Dishes';

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection /> 
      <NavBar />
      <Dishes/> 
    </main>
  )
}

export default App;
