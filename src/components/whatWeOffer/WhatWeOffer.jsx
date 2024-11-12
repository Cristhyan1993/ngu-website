import React from 'react'
import styles from "./whatWeOffer.module.css"
import CardItem from './CardItem'
import { GiWeightScale } from "react-icons/gi";
import { GiStrongMan } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
import { SiReactiveresume } from "react-icons/si";



const WhatWeOffer = () => {
  const cards = [
    {
      image: "/image-3.JPG",
      details: {
        title: "CrossFit",
        icon: <SiReactiveresume />,
        text: "CrossFit se define como movimiento funcional constantemente variado, y eso es exactamente lo que ofrecen las clases de CrossFit en NGU. Nuestras sesiones en grupos pequeños te brindan tu propio espacio de entrenamiento, un equipo de compañeros que te apoya y un coach de CrossFit dedicado a ti."
      }
    },
    {
      image: "/image-8.JPG",
      details: {
        title: "Gimnástica",
        icon: <MdOutlineSportsGymnastics />,
        text: "¡Una oportunidad para perfeccionar tus habilidades gimnásticas presentes en nuestras clases de CrossFit! Dedicarás más tiempo a trabajar en posiciones, fuerza gimnástica y técnica para mejorar y refinar tus movimientos."
      }
    },
    {
      image: "/cards-community.JPG",
      details: {
        title: "Weightlifting",
        icon: <GiStrongMan />,
        text: "¡Ofrecemos la oportunidad para perfeccionar tus técnicas de levantamiento en nuestras clases de CrossFit! Dedicarás más tiempo a mejorar la técnica en movimientos olímpicos como el snatch y clean & jerk, enfocándote en fuerza, posición y ejecución precisa."
      }
    },
    {
      image: "/image-5.jpg",
      details: {
        title: "Bajar de Peso",
        icon: <GiWeightScale />,
        text: "El CrossFit es ideal para perder peso, combinando entrenamientos de alta intensidad con ejercicios de fuerza. Los movimientos completos activan varios grupos musculares, acelerando el metabolismo y la quema de grasa, mientras una comunidad motivadora te impulsa a alcanzar tus objetivos."
      }
    },
    {
      image: "/image-1.JPG",
      details: {
        title: "Ganar Masa Muscular",
        icon: <GiStrong />,
        text: "El CrossFit es excelente para ganar masa muscular, combinando levantamientos de peso, movimientos funcionales y entrenamientos de alta intensidad. Estos ejercicios activan diferentes grupos musculares, mejorando fuerza y resistencia. Además, el uso de pesos progresivos y la variedad de rutinas ayudan a desarrollar músculo de manera equilibrada."
      }
    },
  ]
  return (
    <div className={`${styles.container} marginY`} id="whatWeOffer">
      <div className='wrapper translateY'>
        <div className={styles.contents}>
          <h1>Lo Que <span className='neon'>Ofrecemos</span></h1>
          <p> Nuestras sesiones son aptas para <span className='bold neon'>todos los niveles</span> y tu coach en NGU adaptará los ejercicios y técnicas para que avances de manera segura y que aproveches al <span className='bold'>máximo cada entrenamiento.</span></p>
        
        <div className={styles.cards}>
          {cards.map(card => (
            <CardItem key={card.details.title} card={card} />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer