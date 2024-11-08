import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = ({ card }) => {
    return (
        <div className={styles.container}>
            <h2>{card.heading}</h2>
            <h3>{card.subHeading}</h3>
            <div className={styles.bullet}>
            <ul>
                {card.contents.map((text, index) => (
                    <li key={index}><p>{text}</p></li>
                ))}
            </ul>
            </div>
            <h3>{card.price}</h3>
            <Image src="/gold-corner.png" className={styles.image} width={100} height={100} alt="pattern corner"/>
        </div>
    )
}

export default Card