import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function WomensCategory() {
    const products = useSelector((state)=>state.allProducts.products)
    const mensproducts = products.filter((product)=>{
        return product.category =="women's clothing"
    })

    const mensProductListDisplay = mensproducts.map((product)=>{
        const {id,title, image, price, category} = product;
        return(
            
            <div className = "product-container" key={id}>
                <div>
                <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
                <div className="image-box">
                    <img src={image} style={{height: "300px", width:"300px"}}></img>
                </div>
                <div className="content-box">
                <ul className="content-ul">
                    <li>{title}</li>
                    <li>Price: $ {price}</li>
                    <li>Category: {category}</li>
                </ul>
                    
                </div>
            
                </Link>
                </div>
            </div>
        )
    })
    return (
        <div>
            {mensProductListDisplay}
        </div>
    )
}

export default WomensCategory
