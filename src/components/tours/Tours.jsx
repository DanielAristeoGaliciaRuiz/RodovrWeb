import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './tours.css'
import bahias from '../../assets/bahias.jpg'
import bio from '../../assets/bio.jpg'
import cascadas from '../../assets/cascadas.jpg'
import cocodrilos from '../../assets/cocodrilos.jpg'
import surf from '../../assets/surf.jpg'
import tortugas from '../../assets/tortugas.jpg'

const Data =[
    {id:1,
    nameTour:'9 Bahias',
    img:bahias,
    description:'Conoce bahías de huatulco por mar visitando las principales bahías de este maravilloso destino.'},
		{id:2,
      nameTour:'Cascadas Mágicas',
			img:cascadas,
			description:'Descubra y explore las montañas de la sierra donde encontraremos las espectaculares cascadas Mágicas de Copalitilla.'},
			{id:3,
        nameTour:'Zipolite y Mazunte.',
				img:cocodrilos,
				description:'Tour de Sol y Playa Vamos a pasar un día divertido en el único pueblo mágico la orilla del mar en México, salimos desde donde estés hospedado para llegar a Zipolite playa nudista para tomar el sol, nuestra segunda escala, San Agustinillo con tiempo para nadar, después vamos a Mazunte donde vamos a tener varias escalas.'},

    {id:4,
      nameTour:'Road Surf.',
        img:surf,
        description:'Vivirás la experiencia de conocer las principales playas ideales para realizar surf, algunas visitadas recurrentemente por profesionales del deporte.'},
        {id:5,
          nameTour:'Museo de la Tortuga.',
            img:tortugas,
            description:'Visita el museo de la tortuga ubicado en la comunidad de Mazunte, el cual alberga a siete de las 9 especies de tortugas marinas en el mundo.'},
            {id:6,
              nameTour:'Bioluminiscencia.',
                img:bio,
                description:'Vive la experiencia de la bioluminiscencia en la playa de Puerto Escondido, un espectáculo que no te debes perder.'},
                {id:7,
                  nameTour:'City Tour.',
                    img:bahias,
                    description:'Visita los miradores y contempla el mar desde diferentes ángulos en este recorrido rico en cultura. En el centro histórico, podrás degustar la gastronomía local, que incluye sabores exóticos.'},
                   
                    ]

const Tours = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section className='toursSection' name='tours'>
      <div className="maxWidthContainer">
				<div className="titleSection">
						Principales Actividades
				</div>

				<div  data-aos='fade-up' className="toursCardsContainer">
					{
						Data.map(({id,nameTour ,img,description})=>{
        return(
        <div  key={id} className="cardTour">
            <div className="tourImgContainer">
							<img className='tourImg' src={img} alt="" />
            </div>
              <div className="nameTour">
                {nameTour}
              </div>
            
            <div className="tourDescription">
							{description}
            </div>
            <div className="moreInformation">
              Más Información
            </div>
        </div>
				)})
					}
				</div>
      </div>
    </section>
  )
}

export default Tours