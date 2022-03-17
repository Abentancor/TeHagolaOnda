import React from 'react'

const About = () => {
  return (
    <div className='md:w-1/3 md:mx-auto sm:w-1/1 sm:mx-auto flex flex-row mx-auto  my-24 px-3 py-1 flex-no-wrap drop-shadow-lg'>
        <div className='bg-white text-5xl rounded-lg p-2 flex flex-wrap  '>
            <h1 className='w-full '>Sobre Nosotros</h1>
            <img className='rounded-lg ' src='/assets/logo.png' alt='logo'></img>
        </div>
        <div className='flex flex-wrap md:w-2/3 md:mx-auto sm:1/1 w-full shrink-0 ml-3'>
            <p className='w-full shrink-0 mx-3 bg-yellow-200 rounded-lg p-2 flex flex-wrap '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab hic molestiae a ea illo culpa delectus soluta quasi nobis odio atque totam, corrupti fuga, at necessitatibus dignissimos nisi ipsam maiores quaerat omnis qui. Corrupti dolor, assumenda officia ab nesciunt soluta natus maxime tempora vero, quod, maiores sed alias? Minima!</p>
        </div>
    </div>
  )
}

export default About