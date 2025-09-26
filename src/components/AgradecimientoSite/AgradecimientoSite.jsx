import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AgradecimientoSite.module.css'

export const AgradecimientoSite = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    // Logos para diferentes tamaños
    const logoDesktop = "/img/logoBicolor.png";
    const logoMobile = "/img/LogoVerdeBrillante.png";

    // Detectar cambio de tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Seleccionar logo según el tamaño
    const currentLogo = isMobile ? logoMobile : logoDesktop;

    const openWhatsapp = () => {
        const encodedMessage = encodeURIComponent("Hago envío de mi comprobante!")
        const urlWhatsapp = `https://wa.me/529984410952?text=${encodedMessage}`
        window.open(urlWhatsapp, "_blank")
    }

    const goToHome = () => {
        navigate('/');
    }

    return (
        <section className={styles.agradecimientoSite}>
            <div className={styles.container}>
                <div className={styles.imagenSuperiorFondo}></div>
                <div className={styles.imagenInferiorFondo}></div>

                <article className={styles.contenedorTexto}>
                    <div className={styles.contenidoIzquierda}>
                        <img src={currentLogo} alt="logo" className={styles.imagenLogo}/>
                        <p className={`${styles.textoAgradecimiento} ${styles.textoAgradecimientoCentrado}`}>
                            <span className={styles.boldText}>Gracias</span> por registrarte en la <span className={styles.glittenText}>Copa Del Rey 2025</span>
                        </p>
                        <p className={styles.textoAgradecimiento}>Tu lugar está casi asegurado, solo falta completar tu inscripción con el pago</p>
                        
                        {/* Botón para regresar a la página principal */}
                        <button className={styles.botonHome} onClick={goToHome}>
                            Volver al inicio
                        </button>
                    </div>
                    
                    <div className={styles.contenidoDerecha}>
                        <p className={styles.textoPago}>Estamos muy emocionados de contar contigo en este torneo único de golf y networking</p>
                        <p className={styles.textoPago}>Para completar tu inscripción, te pedimos realizar tu pago de <span className={styles.boldText}>$5500 MXN</span> a la siguiente cuenta bancaria:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItems}>Monto: <span className={styles.boldText}>$5500 MXN</span></li>
                            <li className={styles.listItems}>Banco: Autofin</li>
                            <li className={styles.listItems}>Cuenta: <span className={styles.boldText}>042994930014</span></li>
                            <li className={styles.listItems}>CLABE: <span className={styles.boldText}>128578429949300144</span></li>
                            <li className={styles.listItems}>Titular: INTERMEDIACIÓN GIAM S.A de C.V</li>
                        </ul>

                        <button className={styles.boton} onClick={openWhatsapp}>Enviar Comprobante</button>

                        <p className={styles.textoPago}>Una vez recibido el comprobante, se enviará <span className={styles.boldText}>confirmación oficial + detalles del torneo.</span></p>

                        <p className={styles.textoPago}>Nos vemos el <span className={styles.boldText}>15 de noviembre</span> en <span className={styles.boldText}>El Tinto Cancun Country Club</span> para vivir juntos una experiencia de prestigio, networking y golf con propósito</p>
                    </div>
                </article>
            </div>
        </section>
    )
}