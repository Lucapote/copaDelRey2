import React from 'react'

export const Section = ({cName, children}) => {
  return (
    <section className={cName}>
        <div className={`container__${cName}`}>
            {children}
        </div>
    </section>
  )
}
