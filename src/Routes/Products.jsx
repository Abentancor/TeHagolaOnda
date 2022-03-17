import React from 'react'
import Card from '../components/Card'

const Products = () => {
  return (
    <>
      <div className='flex flex-wrap'>
          <h1 className='text-4xl ml-8 text-black my-3 '>Productos</h1>
      </div>
      <div className='flex flex-wrap'>
        <Card/>
      </div>
    </>

  )
}

export default Products