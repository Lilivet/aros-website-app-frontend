import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../images/FKA_Logo.png'
import '../index.css'

export const Nav = () => {
    const isLoggedIn = useSelector((store) => store.auth.loggedIn)

    let LoginLogout = '';
    if (isLoggedIn) {
        LoginLogout = <NavLink to="/logout">Log Out</NavLink>
    } else {
        LoginLogout = <NavLink to="/login">Login</NavLink>
    }

    return (
        <nav className="nav-container">
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <ul className="navLinks">
                <li>
                    <NavLink exact to="/">Hem</NavLink>
                </li>
                <li>
                    <NavLink to="/newsList">Nyheter</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/about">Klubben</NavLink>
                </li> */}
                {/* <li>
                    <a href="https://fallskarmscenter.se/" target="_blank" rel="noopener noreferrer">Tandemhopp</a>
                </li> */}
                <li>
                    {LoginLogout}
                </li>
            </ul>
        </nav>
    )
}