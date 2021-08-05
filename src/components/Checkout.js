import './Checkout.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeUserAddress } from '../redux/User/user.actions'

function Checkout() {

    const [address, setAddress] = useState({
        address1:"",
        address2:"",
        country:"",
        postCode:""
    })

    const totalPrice = useSelector((state)=>state.cartTotalPriceReducer.totalPrice)

    const dispatch = useDispatch()

    const handleInputChange = (e) =>{
        setAddress((prevAddress)=> ({
            ...prevAddress, 
            [e.target.name]:e.target.value
        }))
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        dispatch(storeUserAddress(address))
        console.log(address)
    }    

    return (
        <>
        <div>
            <h1>CHECKOUT PAGE</h1>
        </div>
        <div>
            <h2>Enter You Address Details Below</h2>
            <form className="address-form" onSubmit={handleSubmit}>
            <label>Adress Line 1</label><input name="address1" value={address.address1} type="text" onChange={handleInputChange}></input>
            <label>Adress Line 2</label><input name="address2" value={address.address2} type="text" onChange={handleInputChange}></input>
            <label>Select Your Country</label>
            <select id="country" name="country" value={address.country} onChange={handleInputChange}> 
                <option value="India">India</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
            </select>
            <label>Enter Postal Code</label>
            <input name="postCode" value={address.postCode} type="text" onChange={handleInputChange}></input>
            <button type="submit">Save Address</button>
            </form>
            <hr></hr>
            <h1>Your Order Summary:</h1>
            <h3>Shipping Address: </h3>
            <div>{address.address1}</div>
            <div>{address.address2}</div>
            <div>{address.country}</div>
            <div>{address.postCode}</div>
            <h3>Total Price: {totalPrice}</h3>
            <button className="loginBtn">Proceed to Payment</button>


        </div>
        </>
    )
}

export default Checkout
