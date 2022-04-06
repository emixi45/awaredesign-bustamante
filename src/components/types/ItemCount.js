import { Link } from "react-router-dom"


const ItemCount=({max=10,onAdd,setCantidad,cantidad})=>{
    const handleSumar=( ) =>{
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar =() =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    } 


return (
    
    <div>
        <button className="btn btn-ouline-primary" onClick={handleRestar}>-</button>
        <span className="mx-2">{cantidad}</span>
        <button className="btn btn-primary" onClick={handleSumar}>+</button>
        <hr/>
        <Link to=""><button className="btn btn-success my-2" onClick={onAdd}>agregar al carrito</button></Link>
    </div>        
);
}
export default ItemCount;