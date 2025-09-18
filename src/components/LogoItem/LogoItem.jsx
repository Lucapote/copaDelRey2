import styles from './LogoItem.module.css'

export const LogoItem = ({src, alt, className = ""}) => {
  return (
    <div className={`${styles.logoItem} ${className}`}>
        <img className={styles.logoBrand} src={src} alt={alt} />
    </div>
  )
}
