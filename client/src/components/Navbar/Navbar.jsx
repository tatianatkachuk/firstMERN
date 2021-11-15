import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './Navbar.scss'

export default function Navbar() {
    const {logout, isLogin} = useContext(AuthContext)

    return (
        <nav>
            <div className="nav-wrapper navbar blue">
                <a href="/" className="brand-logo">MERN Todo App</a>
                {
                    !isLogin
                    ?   <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/" onClick={logout}>Exit</a></li>
                        </ul>

                    :   <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Enter</a></li>
                        </ul>
                }
            </div>
        </nav>
    )
}