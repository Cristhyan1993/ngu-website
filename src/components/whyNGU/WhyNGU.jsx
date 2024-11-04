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
        slug: "comunidadVibrante",
        icon: <MdGroups />,
        text: "Independientemente de tu experiencia o nivel de fitness, serás recibido con los brazos abiertos por la cálida comunidad de NGU Crossfit. Estarás rodeado de personas afines que te apoyan, animan y celebran tus logros."
      }
    },
    {
      image: "/cards-community.jpg",
      details: {
        title: "Clase en Grupo",
        slug: "claseEnGrupo",
        icon: <CiFaceSmile />,
        text: "Con un grupo reducido de solo 8 personas, recibirás un coaching personalizado y disfrutarás de entrenar en un ambiente acogedor."
      }
    },
    {
      image: "/cards-community.jpg",
      details: {
        title: "Exelente Equipamiento",
        slug: "excelenteEquipamiento",
        icon: <CgGym />,
        text: "Contarás con una amplia selección de equipamiento: pesas olímpicas (barra y discos), mancuernas, anillas de gimnasia y barras de dominadas. ¡Aquí tendrás todo lo que necesitas para entrenar!"
      }
    }
  ]
  return (
    <div className={styles.container}>
      <Image src="/edge-pattern.png" height={500} width={1500} alt="design stripes neon and black" className={styles.stripesPattern} />
      <div className="wrapper">
        <div className={styles.contents}>
          <h1>
            Lleva tu entrenamiento al siguiente nivel
          </h1>
          <h3>
            Nuestros entrenadores están comprometidos a ayudarte a alcanzar tus metas. Ya sea que estés comenzando o buscando llevar tu entrenamiento al siguiente nivel, estamos aquí para apoyarte y ayudarte a alcanzar tu máximo potencial.
          </h3>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <CardItem key={index} card={card} />
            ))
            }
          </div>
          <Image src="/barbell.png" height={400} width={1000} alt="barbell" className={styles.barbell} />
        </div>
      </div>
    </div>
  )
}

export default WhyNGU