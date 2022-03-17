import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='container bg-yellow-500 flex flex-wrap '>
          <Link to='/'>
            <img className='logo-img' src="/assets/Logo.svg" alt="" />
          </Link>
            <h1 className='flex-auto p-2 m-2 ml-20 text-4xl font-semi-bold text-yellow-100   '>Te Hago la Onda</h1>

            <ul className='flex items-end m-2 text-yellow-50   '>
              <NavLink to='/Acercadenosotros'>
                <li className='p-2 m-1 shadow-md shadow-yellow-600 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>Quienes somos?</li>
              </NavLink>
              <NavLink to='/Productos'>
                <li className='p-2 m-1 shadow-md shadow-yellow-600 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>Nuestros Productos</li>
              </NavLink>
              <NavLink to='/Contacto'>
                <li className='p-2 m-1 shadow-md shadow-yellow-600 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>Contacto</li>
              </NavLink>
            </ul>
        </nav>
    </>
  )
}

export default Navbar