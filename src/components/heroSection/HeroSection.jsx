import Image from 'next/image'
import React from 'react'
import styles from "./heroSection.module.css"
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Conquista Nuevas Alturas en tu Fitness con...</h1>
        <Image src="/NGU-logo-long.png" height={300} width={1000} alt="logo" className={styles.logo} />
        <h2 className={styles.subText1}>¿Estás empezando o listo para llevar tu entrenamiento al siguiente nivel?</h2>
        <h2 className={styles.subText2}>¡Reserva tu clase de prueba gratuita!</h2>
        <div className={styles.buttons}>
          <Link href="#bookAFreeTrial">
            <button className={styles.reserva}>RESERVA</button>
          </Link>
          <Link href="#membership">
            <button className={styles.membresias}>MEMBRESIAS</button>
          </Link>
        </div>
      </div>
      <div>
      <Image src="/edge-pattern.png" height={500} width={1500} alt="design stripes neon and black" className={styles.stripesPattern} />
      </div>

    </div>
  )
}

export default HeroSection