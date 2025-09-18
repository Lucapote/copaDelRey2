import logo1 from "../../img/patrocinadores/logo1.png"
import logo2 from "../../img/patrocinadores/logo2.png"
import logo3 from "../../img/patrocinadores/logo3.png"
import logo4 from "../../img/patrocinadores/logo4.png"
import logo5 from "../../img/patrocinadores/logo5.png"
import logo6 from "../../img/patrocinadores/logo6.png"
import logo7 from "../../img/patrocinadores/logo7.png"
import logo8 from "../../img/patrocinadores/logo8.png"
import logo9 from "../../img/patrocinadores/logo9.png"
import logo10 from "../../img/patrocinadores/logo10.png"
import logo11 from "../../img/patrocinadores/logo11.png"
import logo12 from "../../img/patrocinadores/logo12.png"
import styles from "./Patrocinadores.module.css"
import { LogoItem } from "../LogoItem/LogoItem"

export const Patrocinadores = () => {

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
    <section className={styles.patrocinadores}>
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
