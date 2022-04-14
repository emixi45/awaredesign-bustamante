import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';






const ItemListContainer=()=>{

	const [ListaProductos,setListaProductos]=useState([])
	const [Cargando,setCargando]=useState(true)
	const {categoryId} = useParams()
	
	
useEffect(()=>{
	setCargando(true)

	const productosRef = collection(db, "productos")
	const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
	getDocs(q)
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