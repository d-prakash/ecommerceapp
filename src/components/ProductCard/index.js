import React, { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import './index.css';


const ProductCard = ({productsData}) =>{
    const {title,image,description,price} = productsData
    const {cart,setCart} = useContext(CartContext)
    return (
        <div className="product-card">
            <div className="products-container">
                <div className="image-container">
                    <img src={image} alt="product" className="item-image"/>
                </div>
                <div className="description-container" >
                    <div>
                    <p className="item-name"><span className="heading">Title:</span> {title}</p>
                    <p><span className="heading">Description:</span> {description}</p>
                    <p><span className="heading">Price: &#8377;</span> {price}</p>
                    </div>
                    {cart.includes(productsData)?(<button onClick={()=>setCart(cart.filter(item=>item.id!==productsData.id))}>Remove from Cart</button>):
                    (<button onClick={()=>setCart([...cart,productsData])}>Add to Cart</button>)}
                    
                </div>
            </div>
        </div>
    )
}
export default ProductCard