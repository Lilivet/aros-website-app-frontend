import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import style from 'styled-components'
import learnToSkydive from '../images/fallkarmkurs.jpg'
import tandemImage from '../images/tandem.jpg'

const Wwrapper = style.div`
display:flex;
align-items: center;
justify content: center;
flex-direction: column;
backround-color: white;
height:auto;
margin-bottom:200px;
// border: 2px solid blue;
`
const WrapperLinks = style.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: flex-start;
height: auto;
width:100%;
// border: 2px solid blue;
@media (max-width:668px) {
    flex-direction: column;
}
`
const WrapperLearnToSkydive = style.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
// border: 2px solid blue;
margin: 10px 5px 0px 10px;
max-width:600px;
padding-bottom:0;
position:relative;
@media (max-width:668px) {
   width: 100%;
    margin:0;
}

`
const WrapperTandem = style.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
// border: 2px solid blue;
margin: 10px 10px 10px 5px;
max-width:600px;
height:auto;
position:relative;
@media (max-width:668px) {
    width: 100%;
     margin:0;
 }
`
const Img = style.img`
width: 100%;
// border:2px solid blue;
@media (max-width:668px) {
     margin:0;
 }
`
const H2 = style.h2`
margin-top: auto;
margin-bottom: auto;
// border: 2px solid blue;
font: 27px Montserrat, Arial, Helvetica, sans-serif;
color: white;
// text-shadow:1px 1px grey;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(0,0,0,0.15);
padding-top:10%;
max-width:600px;
height:auto;
text-transform: uppercase;
font-weight: 500;
@media (max-width:668px) {
    font: 25px Montserrat, Arial, Helvetica, sans-serif;
 }
`
const H1 = style.h1`
font: 30px Montserrat, Arial, Helvetica, sans-serif;
color: #454545;
text-transform: uppercase;
margin-bottom:20px;
margin-top: 30px;
// border: 2px solid blue;
font-weight: 500;
@media (max-width:668px) {
    font: 27px Montserrat, Arial, Helvetica, sans-serif;
 }
`
const H3 = style.h3`
font: 20px Montserrat, Arial, Helvetica, sans-serif;
color: white;
position: absolute;
top: 15%;
right: 0;
bottom: 0;
left: 0;
@media (max-width:668px) {
    font: 18px Montserrat, Arial, Helvetica, sans-serif;
 }
`

export const Welcome = () => {
    return (
        <Wwrapper>
            <H1>Fallskärmsklubben Aros</H1>
            <br />
            <WrapperLinks>
                <WrapperLearnToSkydive>
                    <Link to="/LearnToSkydive" >
                        <Img className="img-skydive" src={learnToSkydive} alt="Fallkärmskurs" />
                        <H2>Fallskärmskurs</H2>
                        <H3>Ditt nya liv väntar på dig!</H3>
                    </Link>
                </WrapperLearnToSkydive>
                <WrapperTandem>
                    <a href="https://fallskarmscenter.se/" target="_blank" rel="noopener noreferrer">
                        <Img className="img-tandem" src={tandemImage} alt="Tandem" />
                        <H2>Tandemhopp</H2></a>
                </WrapperTandem>
            </WrapperLinks>
        </Wwrapper>
    )
}