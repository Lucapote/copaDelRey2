import React from 'react'

export const TarjetaImagenes = ({posicion, imgSrc, altText, children}) => {
  return (
    <div className={`img${posicion}`}>
        <img src={imgSrc} alt={altText} />
        <div className={`texto${posicion}`}>{children}</div>
    </div>
  )
}
