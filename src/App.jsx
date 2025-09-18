import { Navbar } from './components/Navbar/Navbar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { DetallesSection } from './components/DetallesSection/DetallesSection'
import { AgendaSection } from './components/AgendaSection/AgendaSection'
import { Patrocinadores } from './components/Patrocinadores/Patrocinadores'
import {FormTorneo} from "./components/FormTorneo/FormTorneo"
import { PremiosSection } from './components/PremiosSection/PremiosSection'
import { Footer } from './components/Footer/Footer'
import "./index.css"

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <DetallesSection/>
      <AgendaSection/>
      <PremiosSection/>
      <Patrocinadores/>
      <FormTorneo/>
      <Footer/>
    </>
  )
}

export default App
