import React from 'react'
import styles from './membersip.module.css'
import Card from './Card'

const Membership = () => {
  const cards = [
    {
      heading: "1 Clase",
      subHeading: "",
      contents: ["Clase de CrossFit"],
      price: "Bs 40.00"
    },
    {
      heading: "Ilimitado",
      subHeading: "∞/mensual",
      contents: ["Classes de CrossFit", "Classes de Weightlifting"],
      price: "Bs 299.00"
    },
    {
      heading: "Personal",
      subHeading: "",
      contents: ["Plan de entrenamiento para alcanzar tus objetivos"],
      price: "Bs 899.00"
    }
  ]
  return (
    <div className={`${styles.container} marginY`} id='membership'>
      <div className='wrapper'>
        <div className={styles.contents}>
          <h1 className='neon'>Membresias</h1>
          <p>Con una variedad de horarios para nuestras clases en grupos pequeños a lo largo del día, hay un entrenamiento perfecto para cada agenda. Ya seas un madrugador o busques liberar tensiones al final del día, <span className='bold'>¡tenemos la opción ideal para ti!</span></p>
          <div className={styles.cards}>
            {cards.map(card => (
              <Card key={card.heading} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership