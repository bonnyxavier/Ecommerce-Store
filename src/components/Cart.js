import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import './Cart.css'
import { updateTotalPrice } from '../redux/Cart/cart.actions'

function Cart() {
   
   const inCart = useSelector((state)=>state.cartData.cartItems)
   var totalPrice = inCart.reduce((prev,cur)=>{
     return prev + cur.price
   },0).toFixed(2)

   const dispatch = useDispatch()

   dispatch(updateTotalPrice(totalPrice))
   const productListDisplay = inCart.map((product)=>{
   const {id,title, image, price, category} = product;
    return(
        
    
      <div>
              
                <td><img src={image} style={{height: "100px", width:"100px"}}></img></td>
                <td>{title}</td>
                <td> {category} </td>
                <td>$ {price}</td>
            
      </div>
    )
})

return (
    <div className="cartDisplay">
      <div className="cart-table">
      <table>
          <thead>
              <h1>Your items:</h1>
          </thead>
          <tbody>
            <tr>
            {productListDisplay}
            </tr>
          </tbody>
          <tr>
          
          </tr>
        </table>
      </div>
     <div  className="checkout-options">
      <Link to='/checkout' className="totalPrice">  
       <div>
      <button className="checkOutBtn" onClick={()=>alert('Please proceed to payment...')}>Checkout</button> 
      </div> 
      <div >
        
      </div>
      </Link>
        <h3 className="totalPrice" >Your Total is: ${totalPrice} </h3>
      </div>
      
    
    </div>
)
}
export default Cart
