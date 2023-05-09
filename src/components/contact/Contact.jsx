import React from 'react'
import './contact.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'


const Contact = () => {
  return (
    <section className='contactSection' name='info'>
        <div className="contactTitle">
					Contacto
        </div>
        <div className="contactIconsContainer">

        <div className="flex1">
          
          <div className="smallContainerContact">
            <div className="iconContainer">
        <ImLocation className='iconContact'/>
            </div>
              <div className="infoContactContainer">
            <h4 className='titleIcon'>Dirección</h4>
            <p>Sector H-3, Mza 44, Lot. 4B, H3, 70989 Crucecita, Oax.</p>
              </div>
          </div>

          <div className="smallContainerContact">
            <div className="iconContainer">
            <AiOutlineWhatsApp className='iconContact'/>
            </div>
              <div className="infoContactContainer">
            <h4 className='titleIcon'>Whatsapp</h4>
            <p>Iniciar Chat</p>
              </div>
          </div>
          
          </div>

          <div className="flex2">
          <div className="smallContainerContact">
            <div className="iconContainer">
            <MdEmail className='iconContact'/>
            </div>
              <div className="infoContactContainer">
            <h4 className='titleIcon'>Email</h4>
            <p>rodolforuizexperience <br /> @gmail.com</p>
              </div>
          </div>
          
          <div className="smallContainerContact">
            <div className="iconContainer">
            <AiFillInstagram className='iconContact'/>
            </div>
              <div className="infoContactContainer">
            <h4 className='titleIcon'>Instagram</h4>
            <p>Siguenos en nuestras redes.</p>
              </div>
          </div>

          
          </div>
        </div>
        <div className='spaceDown'>
        </div>

    </section>
  )
}

export default Contact