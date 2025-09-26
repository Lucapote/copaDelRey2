import styles from "./BotonContainer.module.css"

export const BotonContainer = ({textButton, link = "#"}) => {
  
  return (
    <a href={link} className={styles.buttonLink}>
      {textButton}
    </a>
  )
}
