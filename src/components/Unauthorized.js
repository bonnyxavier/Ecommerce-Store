import React from 'react'
import {Link} from 'react-router-dom'

function Unauthorized() {
    return (
        <div>
            <h1>YOU CANNOT USE THE WISHLSIT FEATURE WITHOUT LOGGING IN</h1>
            <Link to='/login'>Click here to login</Link>
        </div>
    )
}

export default Unauthorized
