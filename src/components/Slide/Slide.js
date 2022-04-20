import React from "react";
import imghome from "../ImgHome/ImgHome"
import { motion } from "framer-motion";

const slide = () =>{
    
    return (  
        <motion.div className="img-home">
            <motion.div className="slider" drag='x' 
            dragConstraints={{right:2123, left:-2123}}>
            {imghome.map(img =>(
                <motion.div className="iitem">
                    <img src={img} key={img} alt={img}/>
                </motion.div>
            
            ))}
            </motion.div>
        </motion.div>
    )

    
}



export default slide ;