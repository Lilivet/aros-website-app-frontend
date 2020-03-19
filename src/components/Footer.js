import React from 'react'
import style from 'styled-components'

const WrapperFooter = style.footer`
background: #2a2b2b;
height: 300px;
width:100%;
color: white;
position: absolute;
bottom:0;
`

export const Footer = () => {
    return (
        <WrapperFooter>
            <p>Hola footer</p>
        </WrapperFooter>
    )
}