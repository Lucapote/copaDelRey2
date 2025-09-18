import styles from "./Patrocinadores.module.css"
import { LogoItem } from "../LogoItem/LogoItem"

export const Patrocinadores = () => {

    const logo1 = "img/patrocinadores/logo1.png"
    const logo2 = "img/patrocinadores/logo2.png"
    const logo3 = "img/patrocinadores/logo3.png"
    const logo4 = "img/patrocinadores/logo4.png"
    const logo5 = "img/patrocinadores/logo5.png"
    const logo6 = "img/patrocinadores/logo6.png"
    const logo7 = "img/patrocinadores/logo7.png"
    const logo8 = "img/patrocinadores/logo8.png"
    const logo9 = "img/patrocinadores/logo9.png"
    const logo10 = "img/patrocinadores/logo10.png"
    const logo11 = "img/patrocinadores/logo11.png"
    const logo12 = "img/patrocinadores/logo12.png"

    const logos = [
        {id: 1, src: logo1, alt: "Logo Catedral", fila: 1},
        {id: 2, src: logo2, alt: "Logo El Tinto", fila: 1},
        {id: 3, src: logo3, alt: "Logo Back 9", fila: 2},
        {id: 4, src: logo4, alt: "Logo Oye", fila: 2},
        {id: 5, src: logo5, alt: "Logo Arte Cruz", fila: 2},
        {id: 6, src: logo6, alt: "Logo Thea", fila: 2},
        {id: 7, src: logo7, alt: "Logo Navios", fila: 2},
        {id: 8, src: logo8, alt: "Logo Swing", fila: 3},
        {id: 9, src: logo9, alt: "Logo Promo Golf", fila: 3},
        {id: 10, src: logo10, alt: "Logo Swing Travel", fila: 3},
        {id: 11, src: logo11, alt: "Logo Ruah", fila: 3},
        {id: 12, src: logo12, alt: "Logo Finem", fila: 3}
    ]

    const fila1 = logos.filter(logo=>logo.fila == 1);
    const fila2 = logos.filter(logo=>logo.fila == 2);
    const fila3 = logos.filter(logo=>logo.fila == 3);

  return (
    <section id="patrocinadores" className={styles.patrocinadores}>
        <div className={styles.contenedorPatrocinadores}>
            <h2 className={styles.title}>patrocinadores</h2>

            <div className={styles.gridLogos}>
                <div className={`${styles.fila} ${styles.fila1}`}>
                {fila1.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                </div>
                <div className={`${styles.fila} ${styles.fila2}`}>
                {fila2.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                </div>
                <div className={`${styles.fila} ${styles.fila3}`}>
                {fila3.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                </div>
            </div>
        </div>
    </section>
  )
}
