import React from 'react'


const Navbar = () => {
    return (
        <nav className="nav grey">

            <div className="container">
             
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;