import React,{useState} from "react";

const Carrito=({stock,initial,onAdd})=>{
    
    const [contador,setContador]=useState(initial);
    


const clickSum=() => {
    if (contador===stock){
        return;
    }
    setContador(contador +1 );    
};

const clickRes=()=>{
    if (contador===initial){
        return;
    }
    setContador(contador -1 );
};

const addToCart =()=>{
    onAdd(contador);
};
return (
    
    <div>
        <h2>{contador}</h2>
        <div>
            <button onClick={()=> clickSum()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path dd="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg></button>
            <button onClick={()=> clickRes()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
            <path dd="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg></button>
        </div>
        <div>
            <button onClick={()=> addToCart()}>agregar</button>
        </div>
    </div>        
);
}
export default Carrito;