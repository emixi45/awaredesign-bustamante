import React from "react";
import Item from "../Item/Item";

const ItemList=({ListaProductos})=>{
    return (
        <div className="imagen-producto">
            {ListaProductos.map((productos)=> <Item productos={productos} key={productos.id}/>)}
        </div>
    );
};

export default ItemList;