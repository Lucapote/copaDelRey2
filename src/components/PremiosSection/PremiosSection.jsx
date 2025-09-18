import { PremiosCard } from '../PremiosCard/PremiosCard';
import styles from './PremiosSection.module.css';

export const PremiosSection = () => {
    const premiosData = [
        {
            titulo: "Hoyo 3",
            premios: [
                "Scooter",
                "Bolsa de golf",
                "Bocina Bose"
            ]
        },
        {
            titulo: "Hoyo 7",
            subtitulo: "Hole in one: GMC",
            premios: [
                "Bolsa de tour profesional",
                "Juego de dos wedges 56° y 60°",
                "Certificado en restaurante premium para 2 pax"
            ]
        },
        {
            titulo: "Hoyo 11",
            premios: [
                "Vuelo nacional para 2 personas",
                "Bolsa de golf PXG",
                "Certificado de rondas de golf en el campo El Tinto"
            ]
        },
        {
            titulo: "Hoyo 17",
            premios: [
                "Estancia de dos noches en hotel 5 estrellas",
                "Putter de golf",
                "Certificado de artículos de golf"
            ]
        },
        {
            titulo: "DRIVE DE PRESICIÓN HOYO 15",
            subtitulo: "Premio: Drive TaylorMade",
            variant: "precision"
        }
    ];

    return (
        <section className={styles.premiosSection}>
            <div className={styles.container}>
                <h2 className={styles.premiosTitle}>premios</h2>
                
                <div className={styles.premiosGrid}>
                    <div className={styles.topRow}>
                        {premiosData.slice(0, 3).map((premio, index) => (
                            <PremiosCard
                                key={index}
                                titulo={premio.titulo}
                                subtitulo={premio.subtitulo}
                                premios={premio.premios}
                                variant={premio.variant}
                            />
                        ))}
                    </div>
                    
                    <div className={styles.bottomRow}>
                        {premiosData.slice(3, 5).map((premio, index) => (
                            <PremiosCard
                                key={index + 3}
                                titulo={premio.titulo}
                                subtitulo={premio.subtitulo}
                                premios={premio.premios}
                                variant={premio.variant}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};