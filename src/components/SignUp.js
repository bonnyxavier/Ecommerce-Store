import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/User/user.actions'
function SignUp() {
    const [users, setUsers] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        address:""
    })

    const dispatch = useDispatch()

    const handleInputChange = (e) =>{
        setUsers((prevUsers)=> ({
            ...prevUsers, 
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(users);
        dispatch(registerUser(users))
        alert('Your details have been registered, please proceed to login')
        
    }

    return (


       <div>
           <form onSubmit = {handleSubmit}>
               <div className = "form-control">
                   <label>First Name</label>
                   <input type="text" name="fname" value={users.fname} onChange={handleInputChange}></input>
                   <label>Last Name</label>
                   <input type="text" name="lname" value={users.lname} onChange={handleInputChange}></input>
                   <label>Email</label>
                   <input type="email" name="email" value={users.email} onChange={handleInputChange}></input>
                   <label>Password</label>
                   <input type="password" name="password" value={users.password} onChange={handleInputChange}></input>
                   <label>Address</label>
                   <textarea name="address" value={users.address} onChange={handleInputChange} />
                   <br></br>
                   <br></br>
                   <button type="submit">Register</button>
                   <br></br>
                   <Link to={`/login`}>
                       <div>
                           Already have an account? Click here to login.
                        </div>
                    </Link>
               </div>
           </form>
       </div>
    )
}

export default SignUp
