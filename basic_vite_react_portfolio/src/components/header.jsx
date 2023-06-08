import React from 'react'
import './header.css'

function Header() { 
    return (
        <header className="header">
            <a href="#" className="logo">JAY.</a>

            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header
