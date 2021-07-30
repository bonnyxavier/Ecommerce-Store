import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './Categories.css'

function WomensCategory() {

    const [checked100, setChecked100] = useState(false)
    const [checked50, setChecked50] = useState(false)
    const [checked20, setChecked20] = useState(false)

    const products = useSelector((state)=>state.allProducts.products)
    const womensproducts = products.filter((product)=>{
         if(checked100){
            return (
                product.category =="women's clothing" && product.price < 100
            )
        }
        else if(checked50){
            return (
                product.category =="women's clothing" && product.price < 50
            )
        }
        else if(checked20){
            return (
                product.category =="women's clothing" && product.price < 20
            )
        }
        else{
            return product.category =="women's clothing"
        }
    })

    const womensProductListDisplay = womensproducts.map((product)=>{
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
        <div className="category-container">
                <div className="filter-panel">
                        <h2>Filter By:</h2>
                        <br></br>
                        <h3>Price:</h3>
                        <div>
                        <label>
                        <span>Less than 100 </span>
                         <span>
                             <input
                            name="checkbox"
                            type="checkbox"
                            defaultChecked={checked100} 
                            onChange={()=>setChecked100(!checked100)}/>
                        </span>
                        
                        </label>

                        </div>
                        
                        <div>
                        <label>
                        <span>Less than 50 </span>
                         <span>
                             <input
                            name="checkbox"
                            type="checkbox"
                            defaultChecked={checked50} 
                            onChange={()=>setChecked50(!checked50)}/>
                        </span>
                        
                        </label>
                        </div>

                        <div>
                        <label>
                        <span>Less than 20  </span>
                         <span>
                             <input
                            name="checkbox"
                            type="checkbox"
                            defaultChecked={checked20} 
                            onChange={()=>setChecked20(!checked20)}/>
                        </span>
                        
                        </label>
                        </div>
                        
                </div>
                <div className="category-display-panel">
                        {womensProductListDisplay}
                </div>
        </div>
    )
}

export default WomensCategory
