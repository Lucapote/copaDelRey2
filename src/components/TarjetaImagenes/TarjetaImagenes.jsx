import styles from "./TarjetaImagenes.module.css"

export const TarjetaImagenes = ({posicion, imgSrc, altText, children}) => {
  return (
    <div className={styles[`containerImg${posicion}`]}>
        <img className={styles[`img${posicion}`]} src={imgSrc} alt={altText} />
        <div className={styles[`texto${posicion}`]}>{children}</div>
    </div>
  )
}
