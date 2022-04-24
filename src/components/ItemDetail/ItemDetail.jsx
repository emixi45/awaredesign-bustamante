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
        <div >
            <div className="detalle-container ">
                <img className='img-detalle 'src={cargarimg(`./${productoDetail.img}.png`)} alt={nombre} />
            <div className="detalles">
                    <h2 className="my-3">{nombre}</h2>
                    <h3 className="my-3">stock {stock}</h3>
                    <h3 className="my-3">precio ${precio}</h3>
                    {stock < 9 && <p style={{ color: 'red' }}>Ultimas unidades</p>}
                    {
                        !isInCart(id)
                            ? <ItemCount
                                max={stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                onAdd={agregarCarrito}
                            />
                            : <Link to='/cart' className="btn btn-success my-2">Terminar compra</Link>
                    }</div>
            
            
            </div>
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>volver</button>
        </div>
    )
}

export default ItemDetail