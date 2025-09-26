import styles from "./WhatsappButton.module.css"

export const WhatsappButton = () => {
    const logoWpp = "/img/whatsapp.png"

    const openWhatsapp = () => {
        const encodedMessage = encodeURIComponent("Me gustaría tener mas informacion sobre el torneo")

        const urlWhatsapp = `https://wa.me/529984410952?text=${encodedMessage}`

        window.open(urlWhatsapp, "_blank")
    }
  return (
    <button onClick={openWhatsapp} className={styles.buttonWhatsapp}>
        <img src={logoWpp} alt="whatsapp" className={styles.imgLogo}/>
    </button>
  )
}
