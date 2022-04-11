
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



const productos = [
	{id: 1,nombre: 'espejo',stock: 6,img: espejo,category:'textil',precio:2500},
	{id: 2,nombre: 'almohada pastilla',img: almohadapastilla,stock: 10,category:'bazar',precio:3100},
	{id: 3,nombre: 'almohada',stock: 5,img: almohada,category:'textil',precio:600},
	{id: 4,nombre: 'copa trago',stock: 12,img: copa,category:'bazar',precio:2150},
	{id: 5,nombre: 'plantitas',stock: 10,img: planta,category:'textil',precio:200},
	{id: 6,nombre: 'set mate',stock: 4,img: setmatero,category:'bazar',precio:400},
	{id: 7,nombre: 'budas',stock: 10,img: buda,category:'textil',precio:2000},
	{id: 8,nombre: 'canastos',stock: 20,img: canastos,category:'bazar',precio:1600},
	{id: 9,nombre: 'reloj engrane',stock: 3,img: reloj,category:'textil',precio:15000},
	{id: 10,nombre: 'felpudos',stock: 5,img: individuales,category:'bazar',precio:300}
];

export const getproducts = new Promise((resolve,reject)=>{
		let condition=true
		if (condition){
			setTimeout(()=>{
				resolve(productos)
			},3000)
		}else{
			reject("se pudrio todo")
		}
})
