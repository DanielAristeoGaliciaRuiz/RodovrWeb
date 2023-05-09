import React, { useEffect } from 'react'
import bio from '../../assets/bio.jpg'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section name='home' className='homeSection'>
        <div className="generalContainer">
            <img className='coverPhoto' src={bio} ></img>

        </div>
            <div className="textPresentation">
                <h2 data-aos='fade-up'>Agencia de viajes local.</h2>
                <h3 data-aos='fade-up'>Profesionales en el sector turístico. Ubicados en el principal destino turístico de Oaxaca. Buscando crear experiencias inolvidables para usted y sus acompañantes.</h3>
            </div>
    </section>
  )
}

export default Home