import React from 'react'
import Form from './Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'

const ContactCard = () => {
  return (
    <>
        <div className=' contact-card grid grid-col-3 gap-2 m-3 rounded-lg p-2'>
            <h1 className='text-4xl bg-yellow-300 col-span-3 pl-10 rounded-lg'>Contactanos</h1>
            <div className='col-span-2 row-span-2 bg-yellow-100 main rounded-lg p-2'>
                <Form/>
            </div>
            <div className='flex flex-col col-span-1 row-span-1 bg-yellow-200 rounded-lg p-4'>
                <h2>
                    Tel: xxxx-xxx-xxx
                </h2>
                <h2>
                    Correo: TehagolaOnda@test.com
                </h2>
                <img className='logo-img self-center mx-24 absolute border-4 border-yellow-500 rounded-full w-24 h-24' src="/assets/Logo.png" alt="" />
                <ul className='flex  mt-2 text-yellow-50'>
                <li className=' p-2  bg-yellow-300 shadow-md shadow-yellow-500 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'> 
                 <FontAwesomeIcon icon={faInstagram}/>
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  Instagram</a>
                  </li>
                <li className='p-2 ml-3 bg-yellow-300  shadow-md shadow-yellow-500 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>   
                 <FontAwesomeIcon icon={faWhatsapp}/>
                 <a rel="noopener noreferrer" href=" https://wa.me/numerodecel" target="_blank">  WhatsApp</a>
                 </li>

            </ul>

            </div>
            <div className='col-end-4 col-span-1 bg-yellow-200 rounded-xl p-2 '>
                <h1 className='text-2xl pl-1'>Dirección:</h1>
                <h2 className='mb-2 pl-2' >Schachtel 518 Gualeguaychú Entre Ríos</h2>
                <iframe className='w-full h-48 mb-2 rounded-xl px-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.048904901584!2d-58.5276555599004!3d-33.00119669770329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078dea1db9c3%3A0xeb246e4702b0f1b9!2sSchachtel%20518%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1647433583759!5m2!1ses!2sar"></iframe>
            </div>
        </div>
    </>
  )
}

export default ContactCard