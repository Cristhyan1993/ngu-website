import Image from 'next/image'
import React from 'react'
import styles from "./timetable.module.css"
import Lesson from './Lesson'

const Timetable = () => {
  const timetable = {
    weekdays: {
      class: [
        {
          lesson: "CrossFit",
          time: "6am - 7am"
        },
        {
          lesson: "CrossFit",
          time: "7am - 8am"
        },
        {
          lesson: "Weightlifting",
          time: "9am - 10am"
        },
        {
          lesson: "CrossFit",
          time: "6pm - 7pm"
        },
        {
          lesson: "CrossFit",
          time: "7pm - 8pm"
        },
      ]
    },
    saturday: {
      class: [
        {
          lesson: "CrossFit",
          time: "9am - 10am"
        }
      ]
    }
  }
  return (
    <div className={`${styles.container} marginY`} id="horarios">
      <div className='wrapper translateY'>
        <div className={styles.contents}>
          <h1>Horarios</h1>
          <div className={styles.schedule}>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Lunes</h3>
              {
                timetable.weekdays.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }</div>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Martes</h3>
              {
                timetable.weekdays.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }
            </div>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Miercoles</h3>
              {
                timetable.weekdays.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }
            </div>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Jueves</h3>
              {
                timetable.weekdays.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }
            </div>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Viernes</h3>
              {
                timetable.weekdays.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }
            </div>
            <div className={styles.dayContainer}>
              <h3 className={styles.dayBox}>Sabado</h3>
              {
                timetable.saturday.class.map((session, index) => (
                  <Lesson key={index} session={session} />
                ))
              }
            </div>

          </div>
          <div>
            <p>Las reservas deben hacerse con <span className='bold'>1 hora de antelación.</span></p>
            <p>No abrimos <span className='bold'>Domingos ni días feriados.</span></p></div>
        </div>
      </div>
    </div>
  )
}

export default Timetable