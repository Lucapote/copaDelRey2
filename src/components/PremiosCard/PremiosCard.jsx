import styles from './PremiosCard.module.css';

export const PremiosCard = ({ 
    titulo, 
    subtitulo, 
    premios = [],
    variant = "default"
}) => {

    const trofeo = "/img/trofeo.png"

    return (
        <div className={`${styles.premiosCard} ${styles[variant]}`}>
            <div className={styles.header}>
                <img src={trofeo} alt="trofeo" className={styles.trofeo}/>
                <h3 className={styles.titulo}>{titulo}</h3>
                {subtitulo && (
                    <p className={styles.subtitulo}>{subtitulo}</p>
                )}
            </div>
            
            {premios.length > 0 && (
                <div className={styles.premios}>
                    {premios.map((premio, index) => (
                        <div key={index} className={styles.premio}>
                            <span className={styles.posicion}>{index + 1}°</span>
                            <span className={styles.descripcion}>{premio}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};