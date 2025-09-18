import styles from "./Navbar.module.css"

export const Navbar = () => {
  const navItems = [
    { id: 1, text: "HOME", href: "#home" },
    { id: 2, text: "SOBRE EL TORNEO", href: "#about" },
    { id: 3, text: "DETALLES DEL EVENTO", href: "#detalles" },
    { id: 4, text: "AGENDA", href: "#agenda" },
    { id: 5, text: "PREMIOS", href: "#premios" },
    { id: 6, text: "PATROCINADORES", href: "#patrocinadores" },
    { id: 7, text: "REGISTRO", href: "#registro" }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <a href={item.href} className={styles.link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};