import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import ProductCard from "../ProductCard";
import './index.css';


const Cart = () =>{
    const {cart} = useContext(CartContext)
    const [total,setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
      }, [cart]);

    return(
            <div className="cart-app-container">
                <div className="cart-items-container">
                    <div style={{color:"blue",fontSize:"20px",fontWeight:"bold"}}>Cart Items</div>

                    {cart.length === 0 && <div style={{color:"red"}}>Your cart is empty</div>}
                    <div>
                        {cart.map((item)=>(
                            <ProductCard  key={item.id} productsData={item}/>
                        ))}
                    </div>
                </div>
                <div className="cart-total-container"> 
                    <div>Cart Total: &#8377; {total}</div>
                    <Link to="/" className="back-button"><button>Back</button></Link>
                </div>
            </div>
            
    )
}

export default Cart