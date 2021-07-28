import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {

    const products = useSelector((state)=>state.allProducts.products)
    const productListDisplay = products.map((product)=>{
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
            <h1> {productListDisplay} </h1>
        </div>
    )
}

export default ProductComponent
