import React from 'react';
import logoAware from '../mocks/images/logoaware.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return <div className='menu'>
            
            <div >
            <Link to='./Home'><img src={logoAware} style={{width:'100px',paddingBottom:'20px',paddingTop:'20px'}} alt={'decoracion'}/></Link>
            
            </div>
            <nav className='mininav'>
                <Link to='./Home' className='icons' >Home</Link>
                <Link to='/Productos' className='icons' >Productos</Link>
                <CartWidget/>    
            </nav>
            
            
            
        </div>;
     
};
export default Navbar;