import React from 'react'
import styles from './lesson.module.css'

const Lesson = ({ session }) => {

    return (
        <div className={styles.session}>
            <p className={styles.time}>{session.time}</p>
            <p className={session.lesson == "CrossFit" ? styles.blue : styles.red}>{session.lesson}</p> 
        </div>
    )
}

export default Lesson