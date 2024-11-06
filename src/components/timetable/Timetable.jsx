import Image from 'next/image'
import React from 'react'
import styles from "./timetable.module.css"

const Timetable = () => {
  const timetable = [
    {day: "Lunes",
      lesson: {
        time: "6am - 7am",
        class: "CrossFit"
      }
    }
  ]
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <div className={styles.contents}>
          <h1>Horarios</h1>
          <p>Las reservas deben hacerse con 1 hora de antelación.</p>
          <p>No abrimos dias feriados</p>
        </div>
      </div>
      <Image src="/edge-pattern.png" height={500} width={1500} alt="design stripes neon and black" className={styles.stripesPattern} />
    </div>
  )
}

export default Timetable