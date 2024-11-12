import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import { LuDumbbell } from "react-icons/lu";

const Card = ({ card }) => {
    return (
        <div className={`${styles.container} animate`}>
            <h2 className={styles.heading}>{card.heading}</h2>
            <h3>{card.subHeading}</h3>
            <ul className={styles.bulletPoints}>
                {card.contents.map((text, index) => (
                    <li className={styles.bulletPoint} key={index}>
                        <LuDumbbell className={styles.icon} />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
            <p>{card.subText}</p>
            <h3>{card.price}</h3>
            <Image src="/gold-corner.png" className={styles.image} width={100} height={100} alt="pattern corner" />
        </div>
    )
}

export default Card