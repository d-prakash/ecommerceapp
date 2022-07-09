import React from 'react';
import {Link} from 'react-router-dom';
import { CartState } from '../../CartContext/CartContext';
import './index.css';

const Header = () =>{
    const { cart } = CartState();
    return(
        <div className="app-header-container">
            <div className='header-items-container'>
               <Link style= { {textDecoration: 'none'}} to="/"><span className='app-logo-name'>Cloth Store</span></Link>
                <div className='cart-container'>
                    <Link style= { {textDecoration: 'none'}} to="/cart"><span>Cart</span></Link> 
                    <span>{cart.length}</span>
                </div>
            </div>
            
        </div>
    )
}
export default Header