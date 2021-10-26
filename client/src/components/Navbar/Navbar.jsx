import React from 'react'
import './Navbar.scss'
export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper navbar blue">
                <a href="/" className="brand-logo">MERN Todo App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Enter</a></li>
                </ul>
            </div>
        </nav>
    )
}