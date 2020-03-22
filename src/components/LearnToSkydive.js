import React from 'react'
import styled from 'styled-components/macro'
import learnToSkydive from '../images/fallkarmkurs.jpg'

const Form = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify content:flex-start;
height:1000px;
`
const WrapText = styled.form`
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
const Img = styled.img`
width: 30%;
margin-top:5%;
// border:2px solid blue;
@media (max-width:668px) {
    width:100%;
}
`
const WrapMain = styled.div`
display: flex;
align-items:flex-start;
justify-content:space-evenly;
@media (max-width:668px) {
    flex-direction: column;
}
`
const H1 = styled.h1`
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
const Text = styled.p`
text-align: left;
`
const List = styled.ul`
font: 12px Montserrat, Arial, Helvetica, sans-serif;
text-align: left;
text-transform: uppercase;
color:#777777;
font-weight: 700;
`

export const LearnToSkydive = () => {
    return (
        <Form>
            <WrapMain>
                <WrapText>
                    <H1>FALLSKÄRMSKURS</H1>
                    <List><li>Drömmer du om att kunna flyga?</li><br /><br />
                        <li>Vill du känna hur det känns att hoppa ut ur ett fullt fungerande flygplan?</li><br /><br />
                        <li>Skulle du vilja segla omkring i en fallskärm och beundra utsikten under dig?</li><br /><br /></List>
                    <Text>Svenska Fallskärmsklubben Aros erbjuder en modern form av fallskärmsutbildning, AFF.</Text>
                    <Text> Du får lära dig det du behöver om fallskärmen, hur man styr, landar och packar den. Du får träna uthopp och fallställningar i fritt fall och du får kunskap om säkerhet, aerodynamik och väder.</Text>
                    <Text>Alla kurser hålls vid Johannisbergs flygfält i utkanten av Västerås, där vi hoppar året runt.</Text>
                </WrapText>
                <Img className="img-skydive" src={learnToSkydive} alt="Fallkärmskurs" />
            </WrapMain>
        </Form >
    )
}