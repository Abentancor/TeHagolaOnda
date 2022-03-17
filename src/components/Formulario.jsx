import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'

const Formulario = () => {
    const {formEnv, setFormEnv} = useState(false)
  return (
    <div>
        <Formik 
        initialValues={{
            nombre:'',
            telefono:'',
            direccion:'',
            consulta:'',
            envio: false
        }}
        validate = {(valores) => {
            let errores = {}

            if(!valores.nombre){
                errores.nombre = 'Por favor ingresa un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = 'El nombre solo puede contener letras y espacios'
            }					
            
            if(!valores.telefono){
                errores.telefono = 'Por favor ingresa un telefono'
            } /*else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = 'El nombre solo puede contener letras y espacios'
            }*/
            
          if(!valores.direccion){
                errores.direccion = 'Por favor ingresa una dirección'
            } 

           if(!valores.consulta){
                errores.consulta = 'Por favor ingresa su consulta'
            }

            return errores
        }}
        onSubmit={(valores, {resetForm})=>{
            resetForm()
            setFormEnv(true)
            setTimeout(()=>setFormEnv(false),5000)
        }}
        >
            {({errors})=>(
                <Form className='container flex flex-col flex-wrap mx-4 my-2'>
                <div className='flex flex-col mx-4 '>
                    <label className='bg-yellow-300 text-center rounded-lg mb-2 shadow-md shadow-yellow-500' htmlFor="nombre">Nombre</label>
                    <Field className='bg-white rounded-md border-b-2 border-yellow-800 m-1 p-1'
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Ingrese su nombre"
                    />
                    <ErrorMessage 
                        name="nombre" 
                        component={() => (
                            <div className="text-red-500 mt-2">{errors.nombre}</div>)
                    }/>
                </div>

                <div className='flex flex-col mx-4 '>
                <label className='bg-yellow-300 text-center rounded-lg mb-2 shadow-md shadow-yellow-500' htmlFor="telefono">Telefono</label>
                    <Field className='bg-white rounded-md border-b-2 border-yellow-800 m-1 p-1'
                        type="tel" 
                        pattern="[0-9]{4}[0-9]{6}"
                        id="telefono" 
                        name="telefono" 
                        placeholder="Ingrese su numero de telefono"
                    />
                        <ErrorMessage 
                            name="telefono" 
                            component={() => (
                            <div className="text-red-500">{errors.telefono}</div>)
                    }/>
                </div>

                <div className='flex flex-col mx-4 '>
                 <label className='bg-yellow-300 text-center rounded-lg mb-2 shadow-md shadow-yellow-500' htmlFor="direccion">Dirección</label>
                    <Field className='bg-white rounded-md border-b-2 border-yellow-800 m-1 p-1'
                        type="adress" 
                        id="direccion" 
                        name="direccion" 
                        placeholder="ingrese su direccion"
                    />
                        <ErrorMessage 
                            name="direccion" 
                            component={() => (
                                <div className="text-red-500">{errors.direccion}</div>)
                    }/>
                </div>

                <div className='flex flex-col mx-4 '> 
                <label className='bg-yellow-300 text-center rounded-lg mb-2 shadow-md shadow-yellow-500' htmlFor="Consulta">Consulta</label>
                    <Field className='bg-white rounded-md border-b-2 border-yellow-800 m-1 p-1 h-20 text-start break-words'
                        as="textarea" 
                        id="consulta" 
                        name="consulta" 
                        placeholder="ingrese su Consulta"
                    />
                    <ErrorMessage 
                        name="consulta" 
                        component={() => (
                            <div className="text-red-500">{errors.consulta}</div>)
                    }/>
                </div>
                <button className='self-center p-1 ml-3 w-24 h-10 bg-yellow-300  shadow-md shadow-yellow-300 rounded border-2 border-yellow-800 pointer-events-auto hover:border-yellow-600 text-white hover:bg-yellow-400 hover:text-black cursor-pointer' type="submit">Enviar
				    {formEnv && <p className="text-green-500">Formulario enviado con éxito!</p>}
                </button>
                </Form>
            )}
            
        </Formik>
    </div>
  )
}

export default Formulario