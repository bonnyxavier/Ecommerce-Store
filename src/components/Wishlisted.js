import React from 'react'
import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'

function Wishlisted() {

   const inWishList = useSelector((state)=>state.wishListReducer.wishListItems) 
    const wishListDisplay = inWishList.map((wishListItem)=>{
        const {id,title, image, price, category} = wishListItem;
        return(
        
            <div className = "card">
              <img style={{width: "100%"}} src={image}></img>
              <div >
                  <h3>{title}</h3>
                  <p>{category}</p>
              </div>
            </div>
            
            
          )

    })
    return (
        <div className="card-container">
            {wishListDisplay}
        </div>
    )
}

export default Wishlisted
