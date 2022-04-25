import React, { useContext, useState } from "react";
import {CartContext} from "../../Context/CartContext"
import {db} from "../../firebase/config"
import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";
import swal from 'sweetalert2';

const Checkout = ()=> {
    const {cart,cartTotal,vaciarTodo} = useContext (CartContext)
    
    const [orderId, setOrderId]=useState(null)

    const [values, setValues]= useState({
        nombre:'',
        email:'',
        tel:''
    })
    const handleInputChange = (e) =>{
        setValues({
            ...values,[e.target.name] : e.target.value
        })

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (values.name === '' || values.email === '' || values.tel === '') {

            swal.fire({
                title: 'Error',
                html: 'Por favor, complete todos los datos de comprador.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });

        } else if ( values.email !== values.emailConfirm) {

            swal.fire({
                title: 'Error',
                html: 'Los correos electrónicos no coinciden.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
        else {
            const orden = {
                items: cart,
                total: cartTotal(),
                comprador: { ...values },
                fyh: Timestamp.fromDate(new Date())
            }
            const ordersRef = collection(db, 'Orders')
            cart.forEach((item) => {
                const docRef = doc(db, 'productos', item.id)
                getDoc(docRef)
                    .then((doc) => {
                        if (doc.data().stock >= item.cantidad) {
                            updateDoc(docRef, {
                                stock: doc.data().stock - item.cantidad
                            })
                        } else {
                            alert('no hay stock del item')
                        }
                    })
                })
                addDoc(ordersRef, orden)
                .then((doc) => {

                    console.log(doc.id)
                    setOrderId(doc.id)
                    vaciarTodo()
                })


            
        
    }}

    if (orderId){
        return <div className="container my-5">
                <h2>Tu orden se registro Exitosamente!!</h2>
                <hr/>
                <h4>Guarda tu numero de orden es {orderId}</h4>
                <hr/>
                <h4>Datos de comprador:</h4>
                <h4>Nombre: {values.nombre}</h4>
                <h4>Email: {values.email}</h4>
                <h4>telefono: {values.tel}</h4>
                <Link to="/" className="btn btn-primary">Home</Link>
        </div>
    }
    if (cart.length === 0){
        return <Navigate to='/Home' />
    }
    return (
        <div>
            <div className="d-flex justify-content-center my-3">
                <h2>
                    Checkout
                </h2>
            </div>

            <hr />
            <div className="d-flex justify-content-center ">
            <h3>
                Complete los datos para comunicarnos
            </h3>
            </div>
            
            <div className="container-form">

                <form onSubmit={handleSubmit} >
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
                        type={'email'}
                        placeholder='Confirma Tu correo'
                        value={values.emailConfirm}
                        name='emailConfirm'
                        onChange={handleInputChange}
                        
                        
                    />
                    <input className="form-control  my-2"
                        type={'tel'}
                        placeholder='Tu telefono'
                        value={values.tel}
                        name='tel'
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary my-3" type="submit">Enviar</button>
                
                </form>
                

            </div>
            <hr/>
            <Link to="/Home" className="btn btn-primary m-3">Home</Link>
        </div>
    )
}

export default Checkout;