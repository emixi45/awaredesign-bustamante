import React from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail=({productoDetail})=>{
    const {nombre,stock,img}=productoDetail
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate(-1)
    }
    return(
        <div>
            <h2>
                Detalle del producto: {nombre}
            </h2>
            <img className='img-detalle'src={img} alt={nombre} />
            <p>stock {stock}</p>
            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>volver</button>
        </div>
    )
}

export default ItemDetail