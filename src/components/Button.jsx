import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    <>
      <NavLink to='/Pedidos'>
        <button className='btn p-2 m-1 bg-yellow-500 text-white rounded  border-yellow-800 pointer-events-auto hover:border-yellow-600 hover:font-semibold hover:bg-yellow-400 hover:text-black cursor-pointer'>Hacer pedido</button>
      </NavLink>
    </>
  )
}

export default Button