import React from 'react'
import './aboutUs.css'
import guia from '../../assets/guia.jpg'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const AboutUs = () => {
  return (
    <section className='aboutSection' name='about'>

        <div className="titleAbout">
            <h2>Sobre Nosotros</h2>
        <div className="since">
            Desde 2018
        </div>
        </div>

			<div className="displayContainer1">

        <div className="photoContainer">
					<img src={guia} alt="" />
				</div>

				<div className="aboutText">
					<div className="bornTitle">
						Como Todo Comenzó
					</div>
					<div className="bornText">
						RodoTours es una pequeña empresa de turismo fundada en Bahías de Huatulco Oaxaca México en 2018. Rodolfo Ruiz quién es dueño y fundador, además originario del destino, cuenta con una certificación nacional que acredita su experiencia y profecionalismo, el cual se puede apreciar en la dedicación y calidad que ofrece al recorrer los principales atractivos del destino turrístico.
					</div>
					<div className="socialIcons">
					<FiFacebook className='socialIconsImg'/>
					<AiOutlineInstagram className='socialIconsImg'/>
					<AiOutlineWhatsApp className='socialIconsImg'/>
					</div>
				</div>

			</div>

    </section>
  )
}

export default AboutUs