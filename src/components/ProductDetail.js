import React from 'react'
import {useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { addProduct } from '../redux/Cart/cart.actions';


function ProductDetail() {

    const product = useSelector((state)=>state.product)
    const {id, image, title, price, category, description} = product
    const {productId} = useParams()
    const dispatch = useDispatch()
    const fetchProductDetail = async (id) => {
        const response = await axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(selectedProduct(response.data))
      };

      useEffect(()=>{
        if(productId && productId !== "" ) fetchProductDetail();
    },[productId])


    const handleAddToCart = (product)=>{
      if (!product) return;
      dispatch(addProduct(product))
    }


      
      // var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
      // oldItems.push(product)
      // localStorage.setItem('itemsArray', JSON.stringify(oldItems));

      // localStorage.setItem('product', JSON.stringify(product))
    

    return (
      <div className = "single-product-container" key={id}>
    

         <div className="single-image-box">
          <img src={image} style={{height: "300px", width:"300px"}}></img>
        </div>
        <div className="single-content-box">
          <ul className="single-content-ul">
              <h2><li>{title}</li></h2>
              <h3><li>Price: $ {price}</li>
              <li>Category: {category}</li></h3> 
          </ul>
        </div>
        <div className="single-description-box">
              {description}
        </div>
        <button className = "addToCartBtn" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
  </div>
    )
}

export default ProductDetail
