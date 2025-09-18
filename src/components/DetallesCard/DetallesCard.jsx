import styles from "./DetallesCard.module.css"

export const DetallesCard = ({imgSrc, altText, children}) => {
  return (
    <div className={styles.tarjetaDetalles}>
        <img src={imgSrc} alt={altText} className={styles[`img_${altText}`]}/>
        <p className={styles[`texto_${altText}`]}>{children}</p>
    </div>
  )
}
