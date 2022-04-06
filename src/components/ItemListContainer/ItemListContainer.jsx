import React, { useEffect,useState } from 'react';
import ItemList from '../ItemList';
import almohadapastilla from '../mocks/images/almohadapastilla.png';
import almohada from '../mocks/images/almohada.png';
import buda from '../mocks/images/buda.png';
import canastos from '../mocks/images/canastos.png';
import copa from '../mocks/images/copa-trago.png';
import espejo from '../mocks/images/espejo.png';
import reloj from '../mocks/images/relojengranaje.jpg';
import planta from '../mocks/images/planta.png';
import setmatero from '../mocks/images/set-mate.png';
import individuales from '../mocks/images/individuales.jpg';
import { useParams } from 'react-router-dom';



const productos = [
	{id: 1,nombre: 'espejo',stock: 6,img: espejo,category:'textil'},
	{id: 2,nombre: 'almohada pastilla',img: almohadapastilla,stock: 10,category:'bazar'},
	{id: 3,nombre: 'almohada',stock: 5,img: almohada,category:'textil'},
	{id: 4,nombre: 'copa trago',stock: 12,img: copa,category:'bazar'},
	{id: 5,nombre: 'plantitas',stock: 10,img: planta,category:'textil'},
	{id: 6,nombre: 'set mate',stock: 4,img: setmatero,category:'bazar'},
	{id: 7,nombre: 'budas',stock: 10,img: buda,category:'textil'},
	{id: 8,nombre: 'canastos',stock: 20,img: canastos,category:'bazar'},
	{id: 9,nombre: 'reloj engrane',stock: 3,img: reloj,category:'textil'},
	{id: 10,nombre: 'felpudos',stock: 5,img: individuales,category:'bazar'},
];


const ItemListContainer=({elementos})=>{

	const [ListaProductos,setListaProductos]=useState([])
	const [Cargando,setCargando]=useState(true)
	const {categoryId} = useParams()
	console.log(categoryId)
	const getproducts = new Promise((resolve,reject)=>{
		let condition=true
		if (condition){
			setTimeout(()=>{
				resolve(productos)
			},3000)
		}else{
			reject("se pudrio todo")
		}
})
useEffect(()=>{
	getproducts
	.then((res)=>{
		if (categoryId){
			setListaProductos(res.filter((prod)=> prod.category=== categoryId))
		}else{
			setListaProductos(res)
		}
	})
	
	.catch((error)=> console.log(error))
	.finally(()=>setCargando(false))
},[categoryId])
// categorias bazar y textil

return(
		<div>
			<h1>{elementos}</h1>
			{Cargando ? <p>cargando productos...</p> : <ItemList ListaProductos={ListaProductos}/>}
			
		</div>
	)
}

export default ItemListContainer;