import styles from "./DetallesSection.module.css"

export const DetallesSection = () => {
    const locGreen = "/img/iconoLocationVerde.png"
    const reloj = "/img/reloj.png"
    const golfista = "/img/golfista.png"
  return (
    <section className={styles.detalles}>
      <div className={styles.container}>
        <div className={styles.infoDetalles}>
          <h3 className={styles.titleDetalles}>
            <span className={styles.glittenDetalles}>Detalle</span><br />
            del evento
          </h3>

          <div className={styles.dateDetalles}>
            <p className={styles.detallesDateText}>15 / 11 / 2025</p>
          </div>

          <div className={styles.tarjetaInfoDetalles}>
            <div className={styles.lineOneTarjeta}>
              <img className={styles.locationIcon} src={locGreen} alt="location"/>
              <p className={styles.locationTarjetaInfo}>
                <span className={styles.boldTarjeta}>El Tinto Golf Course</span> - Cancún
              </p>
            </div>
            <div className={styles.lineTwoTarjeta}>
              <img className={styles.relojIcon} src={reloj} alt="reloj"/>
              <p className={styles.locationTarjetaInfo}>
                Inicio: <span className={styles.boldTarjeta}>8:00 am</span>
              </p>
            </div>
            <div className={styles.lineThreeTarjeta}>
              <p className={styles.locationTarjetaInfo}>
                <span className={styles.boldTarjeta}>Formato:</span> Pareja bola baja con salida A go-go, modalidad: Mixta
              </p>
            </div>
          </div>
        </div>
        <img className={styles.golfistaDetalles} src={golfista} alt="golfista" />
      </div>
    </section>
  )
}
