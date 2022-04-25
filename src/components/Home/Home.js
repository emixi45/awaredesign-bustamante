import React from "react";
import Slide from "../Slide/Slide";


const Home = ()=>{

    return(
        <div>
            <div>
                <div className="d-flex justify-content-center my-4">
                    <h1>Bienvenido</h1>

                </div>
                <div className="d-flex justify-content-center">
                    <Slide />

                </div>
            </div>
            <div className="d-flex justify-content-center my-4 subtitulo">

                <h2>AwareDesign somos emprendedores, apasionados por el diseño y el detalle</h2>
            </div>
        </div>
        
            
        
    )
}


export default Home;