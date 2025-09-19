import { BotonContainer } from "../BotonContainer/BotonContainer"
import styles from "./HeroSection.module.css"

export const HeroSection = () => {
    const logo = "/img/LogoVerdeBrillante.png"
    const locWhite = "/img/iconoLocationBlanco.png"

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <article className={styles.heroInfo}>
          <div className={styles.logoTorneo}>
            <h1 className={styles.title}>Torneo</h1>
            <img className={styles.logo} src={logo} alt="logoTorneo" />
          </div>
          <div className={styles.locationDate}>
            <div className={styles.tarjetaTorneo}>
              <p className={styles.fechaNumero}>15</p>
              <div className={styles.fechaAnioLugar}>
                <p className={styles.fechaMes}>Noviembre</p>
                <p className={styles.fechaAnio}>2025</p>
                <p className={styles.lugar}>Cancún, México</p>
              </div>
            </div>
            <div className={styles.location}>
              <img src={locWhite} alt="location" className={styles.locationIcon}/>
              <p className={styles.locationSite}>El Tinto Golf Court - Cancún</p>
            </div>
          </div>
        </article>
        <article className={styles.heroText}>
          <div className={styles.descriptionText}>
            <p className={styles.textHero}>
              Más que un torneo, una <span className={styles.glittenText}>experiencia exclusiva</span><br /> 
              de <span className={styles.glittenText}>conexión</span> y <span className={styles.glittenText}>golf</span> entre 
              amigos y con una <span className={styles.glittenText}>causa</span>
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <BotonContainer textButton={"inscríbete ahora"} link="#registro"/>
            <BotonContainer textButton={"ver premios"} link="#premios"/>
          </div>
        </article>
      </div>
    </section>
  )
}
