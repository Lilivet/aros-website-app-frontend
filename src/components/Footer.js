import React from 'react'
import styled from 'styled-components/macro'

const WrapperFooter = styled.footer`
background: #2a2b2b;
height: 300px;
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
            <Text>Hola</Text>
            {/* <Text>  |   Svenska Fallskärmsklubben Aros 2020 | <a href="mailto:info@fkaros.se" target="_top">info@fkaros.se</a> |</Text> */}
        </WrapperFooter>
    )
}