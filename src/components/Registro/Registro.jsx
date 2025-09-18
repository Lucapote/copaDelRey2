import styles from './Registro.module.css'
import logo from "../../img/LogoVerdeBrillante.png"

export const Registro = () => {
  return (
    <section className={styles.registro}>
        <header className={styles.header}>
            <h3 className={styles.title}>Registro</h3>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt="logo" />
            </div> 
            
        </header>
    </section>
  )
}
