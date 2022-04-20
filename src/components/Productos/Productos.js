import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
const Productos = ()=>{
    return(
        <div>
            <h2 className="d-flex justify-content-center my-4">Productos</h2>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-center">
                <Link to='/category/bazar'><button className="btn btn-sm btn-outline-secondary" type="button">Bazar</button></Link>
                <Link to='/category/textil'><button className="btn btn-sm btn-outline-secondary" type="button">Textil</button></Link>
                </form>
            </nav>
        
            <div>
                <ItemListContainer/>
            </div>
        </div>
    )
}
export default Productos;
