import styles from "./BotonContainer.module.css"

export const BotonContainer = ({textButton, link = "#"}) => {
    console.log(styles);
  return (
    <div className={styles.buttonDescription}>
        <a href={link} className={styles.buttonLink}>{textButton}</a>
    </div>
  )
}
