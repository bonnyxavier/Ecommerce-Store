import React, {useState} from 'react';
import './Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import Button from './Button';



function Navbar() {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {setClick(false)}

    const onMouseEnter = ()=>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    }

    const onMouseLeave = ()=>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    }

    return (
       <>
        <nav className = 'navbar'>
            <Link to='/' className = 'navbar-logo'>
                BONNY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Categories <i className = 'fas fa-caret-down' />
                        {dropdown && <Dropdown/>}
                    </Link>
                  
                </li>
                <li className='nav-item'>
                    <Link to='/cart' className="nav-links" onClick={closeMobileMenu}>
                        My Cart<i class="fas fa-shopping-cart"></i>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/wishlist' className="nav-links" onClick={closeMobileMenu}>
                        Wishlist<i class="fas fa-heart"></i>
                    </Link>
                </li>
            </ul>
            <Button></Button>
    
        </nav>
       </>
    )
}

export default Navbar

