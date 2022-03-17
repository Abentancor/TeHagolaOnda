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
                <Form classname=''>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Ingrese su nombre"
                    />
                    <ErrorMessage 
                        name="nombre" 
                        component={() => (
                            <div className="error">{errors.nombre}</div>)
                    }/>
                </div>

                <div>
                <label htmlFor="telefono">Telefono</label>
                    <Field
                        type="tel" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        id="telefono" 
                        name="telefono" 
                        placeholder="Ingrese su numero de telfono"
                    />
                        <ErrorMessage 
                            name="telefono" 
                            component={() => (
                            <div className="error">{errors.telefono}</div>)
                    }/>
                </div>

                <div>
                 <label htmlFor="direccion">Dirección</label>
                    <Field
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        placeholder="ingrese su direccion"
                    />
                        <ErrorMessage 
                            name="direccion" 
                            component={() => (
                                <div className="error">{errors.direccion}</div>)
                    }/>
                </div>

                <div> 
                <label htmlFor="Consulta">Consulta</label>
                    <Field
                        type="textarea" 
                        id="Consulta" 
                        name="Consulta" 
                        placeholder="ingrese su Consulta"
                    />
                    <ErrorMessage 
                        name="consulta" 
                        component={() => (
                            <div className="error">{errors.consulta}</div>)
                    }/>
                </div>
                <button type="submit">Enviar</button>
				    {formEnv && <p className="exito">Formulario enviado con exito!</p>}
                </Form>
            )}
            
        </Formik>
    </div>
  )
}

export default Formulario