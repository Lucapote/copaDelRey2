import { useState, useEffect } from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 1, text: "HOME", href: "#home" },
    { id: 2, text: "SOBRE EL TORNEO", href: "#about" },
    { id: 3, text: "DETALLES DEL EVENTO", href: "#detalles" },
    { id: 4, text: "AGENDA", href: "#agenda" },
    { id: 5, text: "PREMIOS", href: "#premios" },
    { id: 6, text: "PATROCINADORES", href: "#patrocinadores" },
    { id: 7, text: "REGISTRO", href: "#registro" }
  ];

  const esRegistro = (item) => {
    return item.text === "REGISTRO" ? styles.linkRegistro : "";
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          
          {/* Menú desktop */}
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <a href={item.href} className={`${styles.link} ${esRegistro(item)}`}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button 
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className={`${styles.line} ${isMenuOpen ? styles.line1Active : ''}`}></span>
            <span className={`${styles.line} ${isMenuOpen ? styles.line2Active : ''}`}></span>
            <span className={`${styles.line} ${isMenuOpen ? styles.line3Active : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Menú móvil (aside) */}
      <aside className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
        <ul className={styles.mobileMenuList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.mobileMenuItem}>
              <a 
                href={item.href} 
                className={`${styles.mobileMenuLink} ${esRegistro(item)}`}
                onClick={handleLinkClick}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}