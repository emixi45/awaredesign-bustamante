
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
	{id: 1,nombre: 'espejo',stock: 6,img: espejo,},
	{id: 2,nombre: 'almohada pastilla',img: almohadapastilla,stock: 10,},
	{id: 3,nombre: 'almohada',stock: 5,img: almohada,},
	{id: 4,nombre: 'copa trago',stock: 12,img: copa,},
	{id: 5,nombre: 'plantitas',stock: 10,img: planta,},
	{id: 6,nombre: 'set mate',stock: 4,img: setmatero,},
	{id: 7,nombre: 'budas',stock: 10,img: buda,},
	{id: 8,nombre: 'canastos',stock: 20,img: canastos,},
	{id: 9,nombre: 'reloj engrane',stock: 3,img: reloj,},
	{id: 10,nombre: 'felpudos',stock: 5,img: individuales,},
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
