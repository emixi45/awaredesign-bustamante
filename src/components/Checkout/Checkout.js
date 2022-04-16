import React, { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext"
const Checkout = ()=> {
    const {cart,cartTotal} = useContext (CartContext)
    

    const [values, setValues]= useState({
        nombre:'',
        email:'',
        tel:''
    })
    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setValues({
            ...values,[e.target.name] : e.target.value
        })

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const orden = {
            items:cart,
            total: cartTotal(),
            comprador: {...values}
        }
        console.log(orden)
        
    }
    return (
        <div>
            <h2>
                Checkout
            </h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input className="form-control  my-2"
                    type={'text'}
                    placeholder='Tu nombre'
                    value={values.nombre}
                    name='nombre'
                    onChange={handleInputChange}
                />
                <input className="form-control  my-2"
                    type={'email'}
                    placeholder='Tu correo'
                    value={values.email}
                    name='email'
                     onChange={handleInputChange}
                />
                <input className="form-control  my-2"
                    type={'tel'}
                    placeholder='Tu telefono'
                    value={values.tel}
                    name='tel'
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout;