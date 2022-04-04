import React from 'react';
import logoAware from '../mocks/images/logoaware.png';
import CartWidget from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';
import Cart from './../Cart/Cart';


const Navbar = () => {
    return <div className='menu'>
            
            <div >
            <Link to='./'><img src={logoAware} style={{width:'100px',paddingBottom:'20px',paddingTop:'20px'}} alt={'decoracion'}/></Link>
            
            </div>
            <div className='icon dropdown'>
                <Link to='./' className='icons' >Home</Link>
                <Link to='/Productos' className='icons' >Productos</Link>
                <Link to='/Contacto' className='icons' >Contactos</Link>
                <Link to='/Cart' className='icons' ><CartWidget /></Link>
            </div>
            
            
        </div>;
     
};
export default Navbar;