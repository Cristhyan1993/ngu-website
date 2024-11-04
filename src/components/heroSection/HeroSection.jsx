import Image from 'next/image'
import React from 'react'
import styles from "./heroSection.module.css"
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Conquista Nuevas Alturas en tu Fitness con...</h1>
        <Image src="/NGU-logo-long.png" height={300} width={1000} alt="logo" className={styles.logo}/>
        <h2 className={styles.subText1}>¿Estás empezando o listo para llevar tu entrenamiento al siguiente nivel?</h2>
        <h2 className={styles.subText2}>¡Reserva tu clase de prueba gratuita!</h2>
        <div className={styles.buttons}>
          <button className={styles.reserva}>RESERVA</button>
          <button className={styles.membresias}>MEMBRESIAS</button>
        </div>
      </div>
      <Image src="/hero-section-background-1.jpg" height={2000} width={1000} alt='hero' className={styles.backgroundImage} />
    </div>
  )
}

export default HeroSection