import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import MenuSection from './components/MenuSection'
import SignatureDishes from './components/SignatureDishes'
import EventsChef from './components/EventsChef'
import ReserveHighlight from './components/ReserveHighlight'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <MenuSection />
        <SignatureDishes />
        <EventsChef />
        <ReserveHighlight />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
