import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList';

import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';






const ItemListContainer=()=>{

	const [ListaProductos,setListaProductos]=useState([])
	const [Cargando,setCargando]=useState(true)
	const {categoryId} = useParams()
	console.log(categoryId)
	
useEffect(()=>{
	setCargando(true)

	const productosRef = collection(db, "productos")
	getDocs(productosRef)
		.then(resp => {
			const items= resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
			console.log(items)
			setListaProductos(items)
		})
		.finally(()=>{
			setCargando(false)
		})

},[categoryId])
// categorias bazar y textil

return(
		<div>
			
			{
			Cargando
			 ? <p>cargando productos...</p> 
			 : <ItemList ListaProductos={ListaProductos}/>}
			
		</div>
	)
}

export default ItemListContainer;