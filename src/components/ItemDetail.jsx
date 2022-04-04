import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./types/ItemCount";

const ItemDetail=({productoDetail})=>{
    const {id,nombre,stock,img}=productoDetail
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
            cantidad
        }
        console.log(itemToAdd)
    }
    return(
        <div>
            <h2>
                Detalle del producto: {nombre}
            </h2>
            <img className='img-detalle'src={img} alt={nombre} />
            <p>stock {stock}</p>
            <ItemCount 
            max={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            onAdd={agregarCarrito}
            />
            
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>volver</button>
        </div>
    )
}

export default ItemDetail