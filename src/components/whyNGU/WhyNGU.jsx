import React from 'react'
import styles from "./whyNGU.module.css"
import Image from 'next/image'
import CardItem from './CardItem'
import { MdGroups } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { CiFaceSmile } from "react-icons/ci";


const WhyNGU = () => {
  const cards = [
    {
      image: "/cards-group.jpg",
      details: {
        title: "Comunidad Vibrante",
        icon: <CiFaceSmile />,
        text: "Independientemente de tu experiencia o nivel de fitness, serás recibido con los brazos abiertos por la cálida comunidad de NGU Crossfit. Estarás rodeado de personas afines que te apoyan, animan y celebran tus logros."
      }
    },
    {
      image: "/cards-community.jpg",
      details: {
        title: "Clase en Grupo",
        icon: <MdGroups />,
        text: "Con un grupo reducido de solo 8 personas, recibirás un coaching personalizado y disfrutarás de entrenar en un ambiente acogedor."
      }
    },
    {
      image: "/cards-community.jpg",
      details: {
        title: "Exelente Equipamiento",
        icon: <CgGym />,
        text: "Contarás con una amplia selección de equipamiento: pesas olímpicas (barra y discos), mancuernas, anillas de gimnasia y barras de dominadas. ¡Aquí tendrás todo lo que necesitas para entrenar!"
      }
    }
  ]
  return (
    <div className={`${styles.container} marginY`}>
      <div className="wrapper">
        <div className={styles.contents}>
          <h1>
            Lleva tu <span className='neon'>entrenamiento</span> al siguiente nivel
          </h1>
          <p>
            Nuestros entrenadores están comprometidos a ayudarte a alcanzar tus metas. Ya sea que estés <span className='bold'>comenzando</span> o buscando llevar tu entrenamiento al <span className='bold'>siguiente nivel,</span> estamos aquí para apoyarte y ayudarte a alcanzar tu máximo potencial.
          </p>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <CardItem key={index} card={card} />
            ))
            }
          </div>
          {/* <Image src="/barbell.png" height={400} width={1000} alt="barbell" className={styles.barbell} /> */}
        </div>
      </div>
    </div>
  )
}

export default WhyNGU