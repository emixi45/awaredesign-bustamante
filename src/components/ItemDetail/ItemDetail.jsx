import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail=({productoDetail})=>{
    const {addItem,isInCart}= useContext(CartContext)
    const cargarimg=require.context('../mocks/images',true)

    const {id,nombre,stock,precio}=productoDetail
   /* console.log(isInCart(id))lo pongo despues por que esta desestructurado , pero podes poner productoDetail.id */
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate(-1)
    }
    const [cantidad,setCantidad] = useState(1)
    const agregarCarrito = () =>{
        const itemToAdd = {
            id,
            nombre,
            stock,
            cantidad,
            precio
        }
        addItem(itemToAdd)
    }
    return(
        <div>
            <h2 className="my-3">
                Detalle del producto: {nombre}
            </h2>
            <img className='img-detalle'src={cargarimg(`./${productoDetail.img}.png`)} alt={nombre} />
            <p>stock {stock}</p>
            <h3>precio ${precio}</h3>
            {stock < 9 && <p style={{color: 'red'}}>Ultimas unidades</p>}
            {
                !isInCart(id)
                    ? <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={agregarCarrito}
                    />
                    : <Link to='/cart' className="btn btn-success d-block my-2">Terminar compra</Link>
            }
                
                
                
            
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>volver</button>
        </div>
    )
}

export default ItemDetail