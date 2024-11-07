import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className={styles.container}>
      <Image src="/edge-pattern.png" height={500} width={1500} alt="design stripes neon and black" className={styles.stripesPattern} />
      <div className={styles.contentContainer}>
        <div className='wrapper'>
          <div className={styles.contents}>
            <div className={styles.imageContainer}>
              <Image src="/NGU-logo-short.png" width={170} height={50} alt="website logo" />
            </div>
            <div className={styles.itemsContainer}>
              <div className={styles.items}>
                <div className={styles.itemHeading}>
                  <h3>Horarios</h3>
                </div>
                <div className={styles.itemText}>
                  <div className={styles.itemSpacing}>
                    <p>Lun</p>
                    <p>7am - 9pm</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Mar</p>
                    <p>7am - 9pm</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Mie</p>
                    <p>7am - 9pm</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Jue</p>
                    <p>7am - 9pm</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Vie</p>
                    <p>7am - 9pm</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Sab</p>
                    <p>9am - 11am</p>
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Dom</p>
                    <p>Cerrado</p>
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemHeading}>
                  <h3>Ubicacion</h3>
                </div>
                <div className={styles.itemText}>
                  <p>Edificio Torre Nova</p>
                  <p>Calle 27 de Cota Cota</p>
                  <p>La Paz</p>
                  <p>Bolivia</p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemHeading}>
                  <h3>Contacto</h3>
                </div>
                <div className={styles.itemText}>
                  <div className={styles.itemSpacing}>
                    <p>+591 xxxxxx</p>
                    <FaWhatsapp className={styles.icons} />
                  </div>
                  <div className={styles.itemSpacing}>
                    <p>Email@gmail.com</p>
                    <TfiEmail className={styles.icons} />
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemHeading}>
                  <h3>Social</h3>
                </div>
                <div className={styles.itemText}> <Link href="https://www.instagram.com/nevergiveup_crossfit/" target="_blank">
                  <div className={styles.itemSpacing}>
                    <p>Instagram</p>
                    <FaInstagram className={styles.icons} />
                  </div></Link>
                  <Link href="https://www.facebook.com/nevergiveup.crossfit" target="_blank">
                    <div className={styles.itemSpacing}>
                      <p>Facebook</p>
                      <FaFacebookF className={styles.icons} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div><div className={styles.footerBottom}>
          <p>NGU CrossFit - 2024</p>
        </div>

      </div>

    </div>
  )
}

export default Footer