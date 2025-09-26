import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { DetallesSection } from './components/DetallesSection/DetallesSection'
import { AgendaSection } from './components/AgendaSection/AgendaSection'
import { Patrocinadores } from './components/Patrocinadores/Patrocinadores'
import { CatedralSection } from './components/CatedralSection/CatedralSection'
import { FormTorneo } from "./components/FormTorneo/FormTorneo"
import { PremiosSection } from './components/PremiosSection/PremiosSection'
import { Footer } from './components/Footer/Footer'
import { WhatsappButton } from './components/WhatsappButton/WhatsappButton'
import { AgradecimientoSite } from './components/AgradecimientoSite/AgradecimientoSite'
import "./index.css"

// Componente para la página principal
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <DetallesSection/>
      <AgendaSection/>
      <PremiosSection/>
      <Patrocinadores/>
      <CatedralSection/>
      <FormTorneo/>
      <Footer/>
      <WhatsappButton/>
    </>
  )
}

// Componente para la página de agradecimiento
const ThankYouPage = () => {
  return (
    <>
      <AgradecimientoSite/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agradecimiento" element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}

export default App