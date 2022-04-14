import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainter =()=>{
    
    const[productoDetail,setProductoDetail]=useState()
    
    const[Cargando,setCargando]=useState(true)
    
    const {itemId} = useParams()


    useEffect(()=>{
        setCargando(true)

        const docRef= doc(db, "productos", itemId)
        getDoc(docRef)
            .then(doc => {
                setProductoDetail({ id: doc.id, ...doc.data()})
            })
            .finally(()=> {
                setCargando(false)
            })
    },[itemId])
    
    return(
        <Container className='my-5'>
            {
            Cargando 
            ? <p>Cargando Detalles</p> 
            : <ItemDetail productoDetail={productoDetail}/>
            }
        </Container>
    )
    
}


export default ItemDetailContainter;