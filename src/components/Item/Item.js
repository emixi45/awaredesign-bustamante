import React from "react";
import { Link } from "react-router-dom";




 const Item=({productos})=>{
    const cargarimg=require.context('../mocks/images',true)
    return(
        <div className="card" style={{width:'22rem'}}>
            <img src={cargarimg(`./${productos.img}.png`)} className="card-img-top" alt={productos.nombre} />
            <div className="card-body">
                <h5 className="card-title">{productos.nombre}</h5>
                <p className="card-text">{productos.category}</p>
                <p className="card-text">${productos.precio}</p>
                <Link to={`/detail/${productos.id}`} className="btn btn-primary">Ver mas</Link>
            </div>
        </div>
        
    );
};

export default Item;
