import React, { useEffect, useState } from "react";
import { getproducts } from "../mocks/Fakeapi";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainter =()=>{
    const[productoDetail,setProductoDetail]=useState({})
    const[Cargando,setCargando]=useState(true)
    const {itemId} = useParams()
	console.log(itemId)
    useEffect(()=>{
        setCargando(true)
        getproducts
        .then((res)=>{
            
                setProductoDetail(res.find((prod)=> prod.id=== Number(itemId)))
            
        })

        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, [])
    
    return(
        <div>
            {Cargando ? <p>Cargando Detalles</p> : <ItemDetail productoDetail={productoDetail}/>}
        
        
    </div>
    )
    
}


export default ItemDetailContainter;