import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {setProducts} from '../redux/actions/productActions'
import ProductDetail from './ProductDetail'
import ProductComponent from './ProductComponent'

function Home() {

    const products = useSelector((state)=>state)
    const dispatch = useDispatch()


    const fetchProducts = async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err)
        })
        dispatch(setProducts(response.data))
        console.log(response.data)
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <div className="all-product-container">
            <ProductComponent></ProductComponent>
        </div>
    )
}

export default Home
