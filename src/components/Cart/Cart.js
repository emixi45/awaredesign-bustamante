import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {BsFillTrashFill} from "react-icons/bs";
const Cart = ()=>{
    const {cart,cartTotal,vaciarCarrito,removeItem} = useContext(CartContext)
    console.log(cart)
    return(
        <div className="container my-5">
            <h2>Tu carrito </h2>
            
        <hr/>
        {
            cart.map((item)=>(
                <div key={item.id}>
                    <h4>{item.nombre}</h4>
                    <p>{item.cantidad}</p>
                    <h5>Total $ {cartTotal}</h5>
                    <button 
                    className='btn btn-danger' 
                    onClick={()=>removeItem(item.id)}>
                        <BsFillTrashFill/>
                        </button>
                </div>
            ))
        }
        <hr/>
        <button className="btn btn-danger" onClick={vaciarCarrito}>Limpiar carrito </button>
        <hr/>
        <Link to='/'><button className="btn btn-primary">Volver al Home</button></Link>
        </div>
    );
}
export default Cart;