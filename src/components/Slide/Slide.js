import React from "react";
import buda from "../mocks/images/buda.png"
import canastos from "../mocks/images/canastos.png"
import planta from "../mocks/images/planta.png"
import relojengranaje from "../mocks/images/relojengranaje.png"
import espejo from "../mocks/images/espejo.png"
import almohada from "../mocks/images/almohada.png"
import setmate from "../mocks/images/set-mate.png"

const slide = () =>{
    
    return (  
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={buda} class="img-slide" alt={buda}/>
    </div>
    <div class="carousel-item">
      <img src={canastos} class="img-slide" alt={canastos}/>
    </div>
    <div class="carousel-item">
      <img src={planta} class="img-slide" alt={planta}/>
    </div>
    <div class="carousel-item">
      <img src={relojengranaje} class="img-slide" alt={relojengranaje}/>
    </div>
    <div class="carousel-item">
      <img src={espejo} class="img-slide" alt={espejo}/>
    </div>
    <div class="carousel-item">
      <img src={almohada} class="img-slide" alt={almohada}/>
    </div>
    <div class="carousel-item">
      <img src={setmate} class="img-slide" alt={setmate}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )

    
}



export default slide ;