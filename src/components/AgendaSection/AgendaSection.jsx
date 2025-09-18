import { DetallesCard } from "../DetallesCard/DetallesCard"
import styles from "./AgendaSection.module.css"

export const AgendaSection = () => {
    const coctel = "/img/coctel.png"
    const torneo = "/img/torneo.png"
    const premiacion = "/img/premiacion.png"
    const cena = "/img/cena.png"

  return (
    <section className={styles.agenda}>
      <div className={styles.container}>
        <div className={styles.agendaFotoTitle}>
          <h3 className={styles.agendaTitle}>agenda</h3>
        </div>
        <div className={styles.agendaDetalles}>
          <div className={styles.lineaDecoracionDetalles}></div>

          <DetallesCard imgSrc={coctel} altText={"coctel"}>
            <span className={styles.boldDetallesAgenda}>Cocktail</span> de <br /> Bienvenida
          </DetallesCard>
          <DetallesCard imgSrc={torneo} altText={"torneo"}>
            Torneo
          </DetallesCard>
          <DetallesCard imgSrc={premiacion} altText={"premiacion"}>
            Premiación
          </DetallesCard>
          <DetallesCard imgSrc={cena} altText={"cena"}>
            <span className={styles.boldDetallesAgenda}>Cena</span> Gourmet
          </DetallesCard>
        </div>
      </div>
    </section>
  )
}
