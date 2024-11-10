import React from 'react'
import styles from "./cardItem.module.css"
import Image from 'next/image'

const CardItem = ({ card }) => {
    return (
        <div className={`${styles.container} animate`}>
            <Image src={card.image} className={styles.image} height={300} width={500} alt={card.details.title} />
            <div className={styles.contents}>
                <div className={styles.contentTop}>
                    <h2>{card.details.title}</h2>
                    <div className={styles.icon}>
                        {card.details.icon}
                    </div>
                </div>
                <p>{card.details.text}</p>
            </div>
        </div>
    )
}

export default CardItem