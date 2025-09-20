import { useState, useEffect, useRef } from 'react';
import styles from "./Patrocinadores.module.css"
import { LogoItem } from "../LogoItem/LogoItem"

export const Patrocinadores = () => {
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const directionRef = useRef(1); // 1 para derecha, -1 para izquierda

    const logos = [
        {id: 1, src: "img/patrocinadores/logo1.png", alt: "Logo Catedral", fila: 1},
        {id: 2, src: "img/patrocinadores/logo2.png", alt: "Logo El Tinto", fila: 1},
        {id: 3, src: "img/patrocinadores/logo3.png", alt: "Logo Back 9", fila: 2},
        {id: 4, src: "img/patrocinadores/logo4.png", alt: "Logo Oye", fila: 2},
        {id: 5, src: "img/patrocinadores/logo5.png", alt: "Logo Arte Cruz", fila: 2},
        {id: 6, src: "img/patrocinadores/logo6.png", alt: "Logo Thea", fila: 2},
        {id: 7, src: "img/patrocinadores/logo7.png", alt: "Logo Navios", fila: 2},
        {id: 8, src: "img/patrocinadores/logo8.png", alt: "Logo Swing", fila: 3},
        {id: 9, src: "img/patrocinadores/logo9.png", alt: "Logo Promo Golf", fila: 3},
        {id: 10, src: "img/patrocinadores/logo10.png", alt: "Logo Swing Travel", fila: 3},
        {id: 11, src: "img/patrocinadores/logo11.png", alt: "Logo Ruah", fila: 3},
        {id: 12, src: "img/patrocinadores/logo12.png", alt: "Logo Finem", fila: 3}
    ];

    const fila1 = logos.filter(logo => logo.fila === 1);
    const fila2 = logos.filter(logo => logo.fila === 2);
    const fila3 = logos.filter(logo => logo.fila === 3);

    // Detectar cambio de tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto scroll para móvil
    useEffect(() => {
        if (!isMobile || !carouselRef.current) return;

        const startAutoScroll = () => {
            intervalRef.current = setInterval(() => {
                const container = carouselRef.current;
                if (!container) return;

                const maxScroll = container.scrollWidth - container.clientWidth;
                const currentScroll = container.scrollLeft;
                const scrollStep = 1; // Velocidad del scroll (menor = más suave)

                if (directionRef.current === 1) {
                    // Scrolling hacia la derecha
                    if (currentScroll >= maxScroll) {
                        directionRef.current = -1; // Cambiar dirección
                    } else {
                        container.scrollLeft += scrollStep;
                    }
                } else {
                    // Scrolling hacia la izquierda
                    if (currentScroll <= 0) {
                        directionRef.current = 1; // Cambiar dirección
                    } else {
                        container.scrollLeft -= scrollStep;
                    }
                }
            }, 20); // Intervalo en milisegundos (menor = más suave)
        };

        const stopAutoScroll = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        // Iniciar auto scroll
        startAutoScroll();

        // Pausar en hover y touch
        const container = carouselRef.current;
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', startAutoScroll);
        container.addEventListener('touchstart', stopAutoScroll);
        container.addEventListener('touchend', startAutoScroll);

        // Cleanup
        return () => {
            stopAutoScroll();
            if (container) {
                container.removeEventListener('mouseenter', stopAutoScroll);
                container.removeEventListener('mouseleave', startAutoScroll);
                container.removeEventListener('touchstart', stopAutoScroll);
                container.removeEventListener('touchend', startAutoScroll);
            }
        };
    }, [isMobile]);

    return (
        <section id="patrocinadores" className={styles.patrocinadores}>
            <div className={styles.contenedorPatrocinadores}>
                <h2 className={styles.title}>patrocinadores</h2>

                {isMobile ? (
                    // Vista móvil - Carrusel con scroll automático
                    <div className={styles.carouselWrapper}>
                        <div 
                            ref={carouselRef}
                            className={styles.carouselContainer}
                        >
                            <div className={styles.carouselTrack}>
                                {logos.map(logo => (
                                    <div key={logo.id} className={styles.carouselItem}>
                                        <LogoItem {...logo} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    // Vista desktop - Grid original
                    <div className={styles.gridLogos}>
                        <div className={`${styles.fila} ${styles.fila1}`}>
                            {fila1.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                        </div>
                        <div className={`${styles.fila} ${styles.fila2}`}>
                            {fila2.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                        </div>
                        <div className={`${styles.fila} ${styles.fila3}`}>
                            {fila3.map(logo => <LogoItem key={logo.id} {...logo}/>)}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};