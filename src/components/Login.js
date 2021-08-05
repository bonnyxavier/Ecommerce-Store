import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/User/user.actions';
import {Link} from 'react-router-dom'


function Login() {
    const [loginUser, setLoginUser] = useState({
        email:"",
        password:"",
    })

    const handleInputChange = (e) =>{
        setLoginUser((prevUsers)=> ({
            ...prevUsers, 
            [e.target.name]:e.target.value
        }))
    }

    const userDetails = useSelector((state)=>state.userReducer.users)
    
    const dispatch = useDispatch()


    

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userDetails)

        if(loginUser.email == userDetails.email && loginUser.password == userDetails.password){
            alert("login success, you now have access to your wishlist")
            dispatch(authenticateUser(true))
        }
        else{
            alert('incorrect details')
        }
    
    }

    return (
        <div>
        <form onSubmit = {handleSubmit} >
            <div className = "form-control">
               
                <label>Email</label>
                <input type="email" name="email" value={loginUser.email} onChange={handleInputChange}></input>
                <label>Password</label>
                <input type="password" name="password" value={loginUser.password} onChange={handleInputChange}></input>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                <Link to='/signup'>Click here if you don't have an account.</Link>
                <br></br>
            </div>
        </form>
    </div>
    )
}

export default Login
