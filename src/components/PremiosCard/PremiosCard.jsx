import styles from './PremiosCard.module.css';

export const PremiosCard = ({ 
    titulo, 
    subtitulo, 
    premios = [], 
    className = "",
    variant = "default" 
}) => {
    return (
        <div className={`${styles.premiosCard} ${styles[variant]} ${className}`}>
            <div className={styles.header}>
                <div className={styles.trophy}>🏆</div>
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