import styles from "./BotonContainer.module.css"

export const BotonContainer = ({textButton, link = "#"}) => {
    console.log(styles);
  return (
    <a href={link} className={styles.buttonLink}>
      {textButton}
    </a>
  )
}
