import HeroSection from './compontents/HeroSection'
import NavBar from './compontents/NavBar'
import DishCard from './compontents/DishCard'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection /> 
      <NavBar />
      <DishCard /> 
    </main>
  )
}

export default App;
