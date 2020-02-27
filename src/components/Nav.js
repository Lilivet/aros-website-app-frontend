import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../icon/FKA_Logo.png'

import '../index.css'
// npm import styled from "styled-components";

export const Nav = () => {
    return (
        <nav>
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <ul className="navLinks">
                <li>
                    <NavLink to="/Skydivers">Skydivers</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About us</NavLink>
                </li>
            </ul>
        </nav>
    )
}