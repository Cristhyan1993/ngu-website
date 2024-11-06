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
          <Link href="/#horarios">HORARIOS</Link>
          <Link href="/#contacto">CONTACTO</Link>
          <Link href="/#bookAFreeTrial" className={styles.book}>RESERVA TU CLASE DE PRUEBA</Link>
        </div>
        {!open ?
          <CiMenuBurger className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />
          :
          <IoMdClose className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} />}
        {open && (
          <div className={styles.mobileLinks}>
            <Link href="/#horarios" onClick={() => setOpen(false)}>HORARIOS</Link>
            <Link href="/#contacto" onClick={() => setOpen(false)}>CONTACTO</Link>
            <Link href="/#bookAFreeTrial" onClick={() => setOpen(false)} behavior="smooth" className={styles.book}>RESERVA TU CLASE DE PRUEBA</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar