import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {

   const inCart = useSelector((state)=>state.cartData.cartItems)
   const productListDisplay = inCart.map((product)=>{
    const {id,title, image, price, category} = product;
    return(
        
    
      <div>
        <table>
          <thead>
            <th> Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr>
              <td><img src={image} style={{height: "100px", width:"100px"}}></img></td>
              <td>{title}</td>
              <td> {category} </td>
              <td>$ {price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
})

return (
    <div className="cartDisplay">
      <div>
        {productListDisplay}
      </div>
      <div>
      <button className="checkOutBtn" onClick={()=>alert('Please proceed to payment...')}>Checkout</button> 
      </div>
        
    </div>
)
}
export default Cart
