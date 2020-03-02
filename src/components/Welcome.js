import React from 'react'
import style from 'styled-components'

const Wwrapper = style.div`
backround-color: white;
height: 1000px;
border: 2px solid white;
margin-top:80px;

`

export const Welcome = () => {
    return (
        <Wwrapper>
            <h1>Welcome to Aros Skydiving club</h1>
        </Wwrapper>
    )
}