import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";




const Cart = ()=>{
    const {cart,cartTotal,vaciarCarrito,removeItem} = useContext(CartContext)
    console.log(cart)
    return(
        <div className="container my-5 ">
            <h2 className="d-flex justify-content-center">Tu carrito </h2>
            
        <hr/>
        <div className="grid-carrito">

        
        {
            cart.map((item)=>(
                <div key={item.id}>
                    <div >
                        <h4>{item.nombre}</h4>
                        <h3>cantidad {item.cantidad}</h3>
                        <h3>$ {item.precio * item.cantidad}</h3>
                        <Link to=''
                        className='botones-carrito' 
                        onClick={()=>removeItem(item.id)}>
                            eliminar
                            </Link>
                    </div>
                </div>

                
            ))
        }
        </div>
        <h3 className="my-3 d-flex justify-content-center">Total: $ {cartTotal()}</h3>
        <hr/>
        <Link to='' className="botones-carrito" onClick={vaciarCarrito}>Borrar carrito </Link>
        <hr/>
        <Link to='/'><button className="btn btn-primary ">Volver al Home</button></Link>
        <Link to='/Checkout' className="botones-carritos">Finalizar mi compra  </Link>
        </div>
    );
}
export default Cart;