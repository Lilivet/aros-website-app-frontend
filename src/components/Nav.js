import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/FKA_Logo.png'

import '../index.css'
// npm import styled from "styled-components";

export const Nav = () => {
    return (
        <nav className="nav-container">
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <ul className="navLinks">
                <li>
                    <NavLink exact to="/">Hem</NavLink>
                </li>
                <li>
                    <NavLink to="/NewsList">Nyheter</NavLink>
                </li>
                <li>
                    <NavLink to="/About">Klubben</NavLink>
                </li>
                <li>
                    <a href="https://fallskarmscenter.se/" target="_blank" rel="noopener noreferrer">Tandemhopp</a>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}