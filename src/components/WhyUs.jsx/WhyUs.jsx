import React from 'react'
import './whyUs.css'
import {TbBus} from 'react-icons/tb'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {TbCertificate} from 'react-icons/tb'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {BiAnchor} from 'react-icons/bi'
import {RiEnglishInput} from 'react-icons/ri'
import {FaWheelchair} from 'react-icons/fa'

const Data =[
	{
	id:1,
	icon:<TbBus/>,
	smallTitle:'Transporte Seguro y Cómodo',
	litleText:'Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.'
	},
	{
		id:2,
		icon:<TbBus/>,
		smallTitle:'Transporte Seguro y Cómodo',
		litleText:'Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.'
		},
		{
			id:3,
			icon:<TbBus/>,
			smallTitle:'Transporte Seguro y Cómodo',
			litleText:'Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.'
			},
			{
				id:4,
				icon:<TbBus/>,
				smallTitle:'Transporte Seguro y Cómodo',
				litleText:'Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.'
				},
				{
					id:5,
					icon:<TbBus/>,
					smallTitle:'Transporte Seguro y Cómodo',
					litleText:'Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.'
					},
]

const WhyUs = () => {
  return (
    <section className='whyUsSection' name='reasons'> 

	   <div className="titleWhyUs">
			<h2>
				¿Por qué viajar con nosotros?
			</h2>
		 </div>

		 <div className="imgSectionGrid">
			
			<div  className= 'imgIndividualContainer grid1' >
				<div className="img">
						<TbBus className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Transporte Seguro y Cómodo
				</div>
				<div className="litleText">
				Nuestras unidades se encuentran en las mejores condiciones.
				</div>
			</div>

			<div  className= 'imgIndividualContainer grid2' >
				<div className="img">
				<AiOutlineSafetyCertificate className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Seguridad y Profesionalismo
				</div>
				<div className="litleText">
				Realizamos las actividades con las mejores prácticas, seguridad y profesionalismo.
				</div>
			</div>

			<div  className= 'imgIndividualContainer grid3' >
				<div className="img">
				<TbCertificate className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Guía Certificado
				</div>
				<div className="litleText">
				Contamos con la certificación Nom-08 para poder brindar los mejores cervicios.
				</div>
			</div>

			<div  className= 'imgIndividualContainer grid4' >
				<div className="img">
				<FaBriefcaseMedical className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Cursos en Primeros Auxilios
				</div>
				<div className="litleText">
				Nuestros guías cuentan con cursos de curación y primeros auxilios.
				</div>
				
			</div>

			<div  className= 'imgIndividualContainer grid5' >
				<div className="img">
				<BiAnchor className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Tours Definidos 
				</div>
				<div className="litleText">
				Las actividades que realizamos son específicas, seguras y libres de imprevistos e improvisaciones. 
				</div>
			</div>

			<div  className= 'imgIndividualContainer grid6' >
				<div className="img">
				<RiEnglishInput className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Guías Billingues 
				</div>
				<div className="litleText">
				Guías con amplio conocimiento del idioma inglés.
				</div>
			</div>

			<div  className= 'imgIndividualContainer grid7' >
				<div className="img">
				<FaWheelchair className='iconWhy'/>
				</div>
				<div className="smallTitle">
				Servicio Incluyente
				</div>
				<div className="litleText">
				
				</div>
			</div>
				


		 </div>
    </section>
  )
}

export default WhyUs