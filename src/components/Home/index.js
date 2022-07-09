import './index.css'
import Loader from "react-js-loader";
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(' https://fakestoreapi.com/products');
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
      
    }
    fetchData();
    
  }, []);
    return(
         <>
        
        <div className='main-app-container'>
          <h1 className='main-heading'>Fresh Stock</h1>
          <div>
          {
            loading&&
             <div className={'parent-loader'}>
              <Loader type="spinner-circle" bgColor={"blue"} title={"Loading..."} color={'black'} size={100} />
            </div>
          }
           
            {products.map(eachProduct=>{
                return(
                  <ProductCard  key={eachProduct.id} productsData={eachProduct}/>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default Home