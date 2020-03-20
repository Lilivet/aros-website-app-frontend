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
            <Text>  |   Svenska Fallskärmsklubben Aros 2020 | <a href="mailto:info@fkaros.se" target="_top">info@fkaros.se</a> |</Text>
        </WrapperFooter>
    )
}