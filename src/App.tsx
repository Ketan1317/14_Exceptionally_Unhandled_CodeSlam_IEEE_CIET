import AfterHero from './components/AfterHero.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Menu from './components/Menu.tsx'
import MenuOverlay from './components/MenuOverlay.tsx'
import Recipies from './components/Recipies.tsx'
import RecipiesOverlay from './components/RecipiesOverlay.tsx'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <AfterHero />
      <RecipiesOverlay />
      <Recipies/>
      <MenuOverlay/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App