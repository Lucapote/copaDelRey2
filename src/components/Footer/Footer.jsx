import styles from "./Footer.module.css"

export const Footer = () => {

    const redes = [
        "/img/iconoWhatsapp.png",
        "/img/iconoFace.png",
        "/img/iconoWeb.png",
        "/img/iconoYoutube.png"
    ]

  return (
    <footer>
        <div>
            <img src="/img/logoVerdeOscuro.png" alt="Logo" />
        </div>
        <div>
            <div>
                {redes.map((red, index) => (
                    <a key={index} href="#" target="_blank">
                        <img src={red} alt="logo" />
                    </a>
                ))}

                <p>Torneo Copa del Rey 2025</p>

            </div>
        </div>
    </footer>
  )
}