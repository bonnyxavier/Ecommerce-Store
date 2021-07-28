import React, {useState} from 'react';
import { useSelector } from 'react-redux';


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
    

    const handleSubmit = (e) =>{
        console.log(userDetails)

        if(loginUser.email == userDetails.email && loginUser.password == userDetails.password){
            alert("login success")
        }
        else{
            alert('incorrect details')
        }
    
    }

    return (
        <div>
        <form onSubmit = {handleSubmit}>
            <div className = "form-control">
               
                <label>Email</label>
                <input type="email" name="email" value={loginUser.email} onChange={handleInputChange}></input>
                <label>Password</label>
                <input type="password" name="password" value={loginUser.password} onChange={handleInputChange}></input>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                <br></br>
            </div>
        </form>
    </div>
    )
}

export default Login
