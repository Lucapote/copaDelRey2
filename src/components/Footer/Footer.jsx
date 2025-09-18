import styles from "./Footer.module.css"

export const Footer = () => {

    const redes = [
        { src: "/img/iconoWhatsapp.png", nombreRed: "whatsapp" },
        { src: "/img/iconoFace.png", nombreRed: "facebook" },
        { src: "/img/iconoWeb.png", nombreRed: "web" },
        { src: "/img/iconoYoutube.png", nombreRed: "youtube" }
    ];

  return (
    <footer className={styles.footerSection}>
        <div className={styles.containerImg}>
            <img className={styles.logo} src="/img/logoVerdeOscuro.png" alt="Logo" />
        </div>
        <div className={styles.containerCopa}>
            <div className={styles.containerLinks}>
                {redes.map((red, index) => (
                    <a className={`${styles.link} ${styles[`imgLink_${red.nombreRed}`]}`} key={index} href="#" target="_blank">
                        <img className={`${styles.imgLink} ${styles[`imgLink_${red.nombreRed}`]}`} src={red.src} alt="logo" />
                    </a>
                ))}


            </div>
            <p className={styles.nombreTorneo}>Torneo Copa del Rey 2025</p>
        </div>
    </footer>
  )
}