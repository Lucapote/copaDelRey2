import { TarjetaImagenes } from "../TarjetaImagenes/TarjetaImagenes"
import styles from "./AboutSection.module.css"

export const AboutSection = () => {
    const foto2 = "/img/foto2.png"
    const foto3 = "/img/foto3.png"

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutIzquierda}>
          <h2 className={styles.titleAbout}>
            Sobre el<br />
            <span className={styles.spanTitleAbout}>torneo</span>
          </h2>
          <p className={styles.primerParrafoAbout}>
            <span className={styles.glittenAbout}>La Copa del Rey</span> no es solo un torneo de golf: 
            es una <span className={styles.boldAbout}>experiencia</span> diseñada para conectar a{" "}
            <span className={styles.glittenAbout}>empresarios, ejecutivos y líderes visonarios AAA,</span> en 
            un torneo <span className={styles.boldAbout}>exclusivo</span>
          </p>

          <p className={styles.segundoParrafoAbout}>
            Más que un día en el Golf, es una plataforma de{" "}
            <span className={styles.boldAbout}>networking estratégico,</span> para relaciones de alto valor y 
            branding premium, todo bajo un ambiente <span className={styles.boldAbout}>elegante, creativo</span> y{" "}
            <span className={styles.boldAbout}>memorable</span>
          </p>
        </div>

        <div className={styles.aboutDerecha}>
          <TarjetaImagenes posicion={"Izquierda"} imgSrc={foto2} altText={"Campo de Golf"}>
            <p className={styles.textoIzquierda}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi error reiciendis, 
              animi dolore dicta saepe consequatur veniam labore voluptate officiis dignissimos autem nisi in.
            </p>
          </TarjetaImagenes>
          <TarjetaImagenes posicion={"Derecha"} imgSrc={foto3} altText={"Bandera el tinto"}>
            <p className={styles.textoIzquierda}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi error reiciendis, 
              animi dolore dicta saepe consequatur veniam labore voluptate officiis dignissimos autem nisi in.
            </p>
          </TarjetaImagenes>
        </div>
      </div>
    </section>
  )
}