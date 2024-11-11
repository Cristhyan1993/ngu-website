import React from 'react'
import styles from "./bookAFreeTrial.module.css"
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";



const BookAFreeTrial = () => {
  return (
    <div className={`${styles.container} marginY`} id='bookAFreeTrial'>
    <div className={`${styles.wrapper} translateY`}>
      <div className={`${styles.content} animate`}>
        <h1>DA EL PRIMER PASO</h1>
        <p>Contáctanos por WhatsApp o envíanos un correo para reservar una clase de introducción <span className='bold'>gratuita</span> y descubrir si nuestras clases se alinean con tus metas de fitness.</p>
        <h3>Entrena con Nosotros</h3>
        <p>Estaremos encantados de ayudarte a comenzar tu camino en CrossFit.</p>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
          <FaWhatsapp className={styles.icon} />
            <p>+591 75260651</p>
          </div>
          <div className={styles.contactItem}>
          <TfiEmail className={styles.icon}/>
            <p>email@gmail.com</p>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default BookAFreeTrial