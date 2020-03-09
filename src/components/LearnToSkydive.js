import React from 'react'
import style from 'styled-components'
import learnToSkydive from '../images/fallkarmkurs.jpg'

const Form = style.form`
display:flex;
flex-direction: column;
align-items:center;
justify content:flex-start;
height:1000px;
`
const WrapText = style.form`
width:40%;
height: auto;
text-align: left;
margin-top:3%;
@media (max-width:668px) {
    width:100%;
    height: 50%;
    padding:10px;
}

`
const Img = style.img`
width: 30%;
margin-top:5%;
// border:2px solid blue;
@media (max-width:668px) {
    width:100%;
}
`
const WrapMain = style.div`
display: flex;
align-items:flex-start;
justify-content:space-evenly;
@media (max-width:668px) {
    flex-direction: column;
}
`
const H1 = style.h1`
font: 30px Montserrat, Arial, Helvetica, sans-serif;
color: #454545;
text-transform: uppercase;
margin-bottom:20px;
margin-top: 30px;
font-weight: 700;
// border: 2px solid blue;

@media (max-width: 668px) {
font: 20px Montserrat, Arial, Helvetica, sans-serif;
margin-top:20px;
margin-bottom:10p;
  }
`
const Text = style.p`
text-align: left;
`



export const LearnToSkydive = () => {
    return (
        <Form>
            <WrapMain>
                <WrapText>
                    <H1>FALLSKÄRMSKURS</H1>
                    <Text>Svenska Fallskärmsklubben Aros erbjuder en modern form av fallskärmsutbildning, AFF.</Text>
                    <Text> Du får lära dig det du behöver om fallskärmen, hur man styr, landar och packar den. Du får träna uthopp och fallställningar i fritt fall och du får kunskap om säkerhet, aerodynamik och väder.</Text>
                    <Text>Alla kurser hålls vid Johannisbergs flygfält i utkanten av Västerås, där vi hoppar året runt.</Text>
                </WrapText>
                <Img className="img-skydive" src={learnToSkydive} alt="Fallkärmskurs" />
            </WrapMain>
        </Form >
    )
}