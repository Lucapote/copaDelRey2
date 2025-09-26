import styles from './CatedralSection.module.css'

export const CatedralSection = () => {
    const catedralLogo = "/img/patrocinadores/logo1.png"

  return (
    <section className={styles.catedralSection}>
        <article className={styles.container}>
            <div className={styles.textoIzquierda}>
                <p className={styles.texto}><span className={styles.destacado}>El 100% de las ganancias del torneo serán donadas</span> para la Construcción de la <span className={styles.destacado}>Catedral de Cancún</span> , una obra histórica que generará un <span className={styles.destacado}>impacto espiritual, formativo, caritativo y cultural</span> para el <span className={styles.destacado}>estado de Quintana Roo</span> durante cientos de años.</p>
            </div>
            <div className={styles.imagenDerecha}>
                <img src={catedralLogo} alt="logo catedral" className={styles.imgLogo}/>
            </div>
        </article>
    </section>
  )
}
