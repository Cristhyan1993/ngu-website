"use client"

import React, { useState } from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div>
        <Link href="/">
          <Image src="/NGU-logo-short.png" width={150} height={80} alt="logo" className={styles.logo} />
       </Link>
       </div>
        <div className={styles.links}>
          <Link href="/#horarios" className={styles.link}>HORARIOS</Link>
          <Link href="/#contacto" className={styles.link}>CONTACTO</Link>
          <Link href="/#bookAFreeTrial" className={`${styles.book} ${styles.link}`}>RESERVA TU CLASE DE PRUEBA</Link>
        </div>
        {!open ?
          <CiMenuBurger className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />
          :
          <IoMdClose className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />}
        {open && (
          <div className={styles.mobileLinks}>
            <Link href="/#whatWeOffer" onClick={() => setOpen(false)}><p>LO QUE OFRECEMOS</p></Link>
            <Link href="/#membership" onClick={() => setOpen(false)}><p>Membresías</p></Link>
            <Link href="/#contacto" onClick={() => setOpen(false)}><p>CONTACTO</p></Link>
            <Link href="/#horarios" onClick={() => setOpen(false)}><p>HORARIOS</p></Link>
            <Link href="/#bookAFreeTrial" onClick={() => setOpen(false)} behavior="smooth" className={styles.book}><p>RESERVA TU CLASE DE PRUEBA</p></Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar