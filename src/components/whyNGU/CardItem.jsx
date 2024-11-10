import Image from 'next/image'
import React from 'react'
import styles from "./cardItem.module.css"

const CardItem = ({ card }) => {
    return (
        <div className={`${styles.container} animate`} >
            <Image src={card.image} height={300} width={600} alt="group photo" className={styles.cardImage} />
            <div className={styles.contents}>
                <div className={styles.icon}>
                    {card.details.icon}
                </div>
                <h3>{card.details.title}</h3>
                <p>{card.details.text}</p>
            </div>
        </div>
    )
}

export default CardItem