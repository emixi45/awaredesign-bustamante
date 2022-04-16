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
                    <div >
                        <h4>{item.nombre}</h4>
                        <h4>{item.cantidad}</h4>
                        <h4>precio $ {item.precio * item.cantidad}</h4>
                        <button 
                        className='btn btn-danger' 
                        onClick={()=>removeItem(item.id)}>
                            <BsFillTrashFill/>
                            </button>
                    </div>
                </div>

                
            ))
        }
        <h3>Total: $ {cartTotal()}</h3>
        <hr/>
        <button className="btn btn-danger" onClick={vaciarCarrito}>Limpiar carrito </button>
        <Link to='/Checkout' className="btn btn-success mx-3">Terminar mi compra  </Link>
        <hr/>
        <Link to='/'><button className="btn btn-primary">Volver al Home</button></Link>
        </div>
    );
}
export default Cart;