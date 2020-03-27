import React from 'react'
import styled from 'styled-components/macro'

const WrapperFooter = styled.footer`
background: #2a2b2b;
height: 100px;
width:100%;
color: white;
position: absolute;
bottom:0;
`
const Text = styled.p`
color:white;
`


export const Footer = () => {
    return (
        <WrapperFooter>
            <Text>  |   Svenska Fallskärmsklubben Aros 2020 | </Text>
            | <a href="mailto:info@fkaros.se" target="blank">info@fkaros.se</a> |
        </WrapperFooter>
    )
}