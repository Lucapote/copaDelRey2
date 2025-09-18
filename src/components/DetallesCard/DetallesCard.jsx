import React from 'react'

export const DetallesCard = ({cName = "tarjetaDetalles" ,imgSrc, altText, children}) => {
  return (
    <div className={cName}>
        <img src={imgSrc} alt={altText} />
        <p>{children}</p>
    </div>
  )
}
