import Image from 'next/image'
import React from 'react'
import styles from "./contact.module.css"
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  return (
    <div className={`${styles.container} marginY`} id="contacto">
      <h1>Contacto</h1>
      <div className='wrapper'>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <Image src="/quote.PNG" width={250} height={500} alt="quote" className={`${styles.image} ${styles.hidden}`} />
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contactTop}>
              <div className={styles.contactInfo}>
                <h3>¡Estamos Aquí para <span className="neon bold">Ayudarte</span>!</h3>
                <p>Si tienes preguntas, quieres más información sobre nuestras clases, o estás <span className='neon bold'>listo para comenzar</span> tu viaje en CrossFit, ¡no dudes en ponerte en contacto con nosotros!</p>
                <div className={`${styles.iconItems} neon`}>
                  <div className={styles.iconItem}>
                    <FaWhatsapp className={styles.icons} />
                    <p>+591 xxxxxx</p>
                  </div>
                  <div className={styles.iconItem}>
                    <TfiEmail className={styles.icons} />
                    email@gmail.com
                  </div>
                </div>
              </div>
              <div className={styles.contactLocation}>
                <h3>
                  Ubicacion
                </h3>
                <p>También puedes visitarnos en nuestro box para conocer a nuestro <span className='bold'>increíble equipo.</span> ¡Nos encantaría verte y ser parte de tu vida fit!</p>
                <div className={styles.iconItem}>
                  <IoLocationOutline className={styles.icons} />
                  <p>Edificio Torre Nova</p>
                  <p>Calle 27 de Cota Cota</p>
                  <Link href="https://maps.app.goo.gl/rCLwc2YCAGuyxbqC9" target="_blank">
                    <p className={styles.link}>(Abrir google maps)</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.contactBottom}>
              <p><span className='bold neon'>¡Únete a nuestra comunidad</span> y descubre lo que CrossFit puede hacer por ti!</p>
              <p>Síguenos en nuestras redes sociales para estar al tanto de novedades.</p>
              <div className={`${styles.iconItems} neon`}>
                <div className={styles.iconItem}>
                  <Link href="https://www.facebook.com/nevergiveup.crossfit" target="_blank">
                    <FaFacebookF className={styles.icons} />
                    <p>nevergiveup.crossfit</p>
                  </Link>
                </div>
                <div className={styles.iconItem}>
                  <Link href="https://www.instagram.com/nevergiveup_crossfit/" target="_blank">
                    <FaInstagram className={styles.icons} />
                    <p>@nevergiveup_crossfit</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <Image src="/cards-group.jpg" width={1080} height={1000} alt="quote" className={styles.image} />
      </div>

    </div>
  )
}

export default Contact