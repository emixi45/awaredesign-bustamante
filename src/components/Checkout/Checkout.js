import React, { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext"
import {db} from "../../firebase/config"
import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";

const Checkout = ()=> {
    const {cart,cartTotal,vaciarCarrito} = useContext (CartContext)
    
    const [orderId, setOrderId]=useState(null)

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
            comprador: {...values},
            fyh: Timestamp.fromDate(new Date())
        }
        const ordersRef =collection(db, 'Orders')
        cart.forEach((item)=>{
            const docRef = doc(db, 'productos' , item.id)
            getDoc (docRef)
            .then((doc)=>{
                if (doc.data().stock >= item.cantidad) {
                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad
                    })
                }else {
                    alert('no hay stock del item')
                }
                
            })
        })
        addDoc(ordersRef, orden)
        .then((doc)=>{
            
            console.log(doc.id)
            setOrderId(doc.id)
            vaciarCarrito()
        })
       

        console.log(orden)
        
    }

    if (orderId){
        return <div className="container my-5">
                <h2>Tur orden se registro Exitosamente!!</h2>
                <hr/>
                <h4>guarda tu numero de orden es {orderId}</h4>
                <Link to="/" className="btn btn-primary">Home</Link>
        </div>
    }
    if (cart.length === 0){
        return <Navigate to='/' />
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