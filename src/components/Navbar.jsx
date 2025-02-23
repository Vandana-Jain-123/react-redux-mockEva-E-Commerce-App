import React from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <div>
         
            <nav className='navbar'>
                {/* <Link to="/">Home</Link> */}
                <nav1>
                    <Link className="navLink" to="/productList">ProductList</Link>
                    <Link className="navLink" to="/orderSuccess">OrderSuccess</Link>
                </nav1>
                <nav2>
                    <Link className="right-navLink" to="/checkout">Checkout</Link>
                    <Link className="right-navLink" to="/cartData">Cart</Link>
                </nav2>
                
            </nav>

        </div>
    )
}

export default Navbar
