import { useState } from 'react'
import { Section } from './components/Section/Section'
import { BotonContainer } from './components/BotonContainer/BotonContainer'
import { TarjetaImagenes } from './components/TarjetaImagenes/TarjetaImagenes'
import { DetallesCard } from './components/DetallesCard/DetallesCard'
import { Patrocinadores } from './components/Patrocinadores/Patrocinadores'
import {FormTorneo} from "./components/FormTorneo/FormTorneo"
import "./index.css"
import logo from "./img/LogoVerdeBrillante.png"
import locWhite from "./img/iconoLocationBlanco.png"
import foto2 from "./img/foto2.png"
import foto3 from "./img/foto3.png"
import reloj from "./img/reloj.png"
import locGreen from "./img/iconoLocationVerde.png"
import golfista from "./img/golfista.png"
import coctel from "./img/coctel.png"
import torneo from "./img/torneo.png"
import premiacion from "./img/premiacion.png"
import cena from "./img/cena.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section cName={"hero"}>
        <article className='heroInfo'>
          <div className='logoTorneo'>
            <h1 className='title'>Torneo</h1>
            <img className='logo' src={logo} alt="logoTorneo" />
          </div>
          <div className="locationDate">
            <div className="tarjetaTorneo">
              <p className="fechaNumero">15</p>
              <div className="fechaAnioLugar">
                <p className="fechaMes">Noviembre</p>
                <p className="fechaAnio">2025</p>
                <p className="lugar">Cancún, México</p>
              </div>
            </div>
            <div className="location">
              <img src={locWhite} alt="logo" className='locationIcon'/>
              <p className="locationSite">El Tinto Golf Court - Cancún</p>
            </div>
          </div>
        </article>
        <article className='heroText'>
          <div className="descriptionText">
            <p className="textHero">Más que un torneo, una <span className="glittenText">experiencia exclusiva</span><br /> de <span className="glittenText">conexión</span> y <span className="glittenText">golf</span> entre amigos y con una <span className="glittenText">causa</span></p>
          </div>
          <div className="buttonsContainer">
            <BotonContainer textButton={"inscríbete ahora"}/>
            <BotonContainer textButton={"ver premios"}/>
          </div>
        </article>
      </Section>
      <Section cName={"about"}>
        <div className="aboutIzquierda">
          <h2 className="titleAbout">Sobre el<br /><span className="spanTitleAbout">torneo</span></h2>
          <p className="primerParrafoAbout"><span className="glittenAbout">La Copa del Rey</span> no es solo un torneo de golf: es una <span className="boldAbout">experiencia</span> disñada para conectar a <span className="glittenAbout">empresarios, ejecutivos y líderes visonarios AAA,</span> en un torneo <span className="boldAbout">exclusivo</span></p>

          <p className="segundoParrafoAbout">Más que un día en el Golf, es una plataforma de <span className="boldAbout">networking estratégico,</span> para relaciones de alto valor y branding premium, todo bajo un ambiente <span className="boldAbout">elegante, creativo</span> y <span className="boldAbout">memorable</span></p>
        </div>

        <div className="aboutDerecha">
          <TarjetaImagenes posicion={"Izquierda"} imgSrc={foto2} altText={"Campo de Golf"}>
            <p className="textoIzquierda">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi error reiciendis, animi dolore dicta saepe consequatur veniam labore voluptate officiis dignissimos autem nisi in possimus minima corrupti accusamus molestias.</p>
          </TarjetaImagenes>
          <TarjetaImagenes posicion={"Derecha"} imgSrc={foto3} altText={"Bandera el tinto"}>
            <p className="textoIzquierda">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi error reiciendis, animi dolore dicta saepe consequatur veniam labore voluptate officiis dignissimos autem nisi in possimus minima corrupti accusamus molestias.</p>
          </TarjetaImagenes>
        </div>
      </Section>
      <Section cName={"detalles"}>
        <div className="infoDetalles">
          <h3 className="titleDetalles"><span className="glittenDetalles">Detalle</span><br />del evento</h3>

          <div className="dateDetalles">
            <p className="detallesDateText">15 / 11 / 2025</p>
          </div>

          <div className="tarjetaInfoDetalles">
            <div className="lineOneTarjeta">
              <img className='locationIcon' src={locGreen} alt="location"/>
              <p className="locationTarjetaInfo"><span className="boldTarjeta">El Tinto Golf Course</span> - Cancún</p>
            </div>
            <div className="lineTwoTarjeta">
              <img className='relojIcon' src={reloj} alt="reloj"/>
              <p className="locationTarjetaInfo">Inicio: <span className="boldTarjeta">8:00 am</span></p>
            </div>
            <div className="lineThreeTarjeta">
              <p className="locationTarjetaInfo"><span className="boldTarjeta">Formato:</span> Pareja bola baja con salida A go-go, modalidad: Mixta</p>
            </div>
            
          </div>
        </div>
        <img className='golfistaDetalles' src={golfista} alt="golfista" />
      </Section>
      <Section cName={"agenda"}>
        <div className="agendaFotoTitle">
          <h3 className="agendaTitle">agenda</h3>
        </div>
        <div className="agendaDetalles">
          <div className="lineaDecoracionDetalles"></div>

          <DetallesCard imgSrc={coctel} altText={"coctel"}>
            <span className="boldDetallesAgenda">Cocktail</span> de Bienvenida
          </DetallesCard>
          <DetallesCard imgSrc={torneo} altText={"torneo"}>
            Torneo
          </DetallesCard>
          <DetallesCard imgSrc={premiacion} altText={"premiacion"}>
            Premiación
          </DetallesCard>
          <DetallesCard imgSrc={coctel} altText={"coctel"}>
            <span className="boldDetallesAgenda">Cena</span> Gourmet
          </DetallesCard>
        </div>
      </Section>
      <Patrocinadores/>
      <FormTorneo/>
    </>
  )
}

export default App
