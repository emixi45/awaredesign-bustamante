import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {BsFillCartFill} from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";


const CartWidget=() =>{
    const {cartQuantity}=useContext(CartContext)

    return(
        <Link to="/cart" className="cart-icon">
            <BsFillCartFill/>
            <span className="cart-number">{cartQuantity()}</span>
        </Link>
        
    )
    
}



export default CartWidget;