import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

  return (
    <>
        <footer className='container bg-yellow-500 flex flex-row justify-start footer '>
            <ul className='flex self-center m-2 text-yellow-50'>
                <li className=' p-2 m-1 shadow-md shadow-yellow-600 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'> 
                 <FontAwesomeIcon icon={faInstagram}/>
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tehagolaonda/?hl=es" target="_blank">  Instagram</a>
                  </li>
                <li className='p-2 m-1 shadow-md shadow-yellow-600 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>   
                 <FontAwesomeIcon icon={faWhatsapp}/>
                 <a rel="noopener noreferrer" href=" https://wa.me/numerodecel" target="_blank">  WhatsApp</a>
                 </li>
            </ul>
        </footer>
    </>
  )
}

export default Footer