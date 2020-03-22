import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { BackArrow } from '../images/BackArrow'
import '../index.css'

const MainWrapperNewsDetails = styled.main`
display: flex;
flex-direction:column;
align-items: center; /*this is affecting main in all pages!*/
justify-content: center;
width:100%;
padding-bottom:300px;

`
const LinkBack = styled.a`
display:flex;
flex-direction: row;
align-items: center;
justify-items:space-between;
margin-left:10px;
margin-top: 5%;
&:hover {
    opacity: 0.7;
  };
@media (max-width:668px) {
    margin-left:0;
    justify-items: flex-start;
 }
`
const WrapperNewsDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: flex-start;
justify-content: flex-start;
`
const H1 = styled.h1`
font: 30px Montserrat, Arial, Helvetica, sans-serif;
color: #454545;
text-transform: uppercase;
margin-bottom:20px;
margin-top: 30px;
text-align:left;
// border: 2px solid blue;
font-weight: 500;
@media (max-width:668px) {
    font: 27px Montserrat, Arial, Helvetica, sans-serif;
 }
`
const WrapperTextImage = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:flex-start;
@media (max-width:668px) {
 flex-direction:column;
}
`
const NewsImg = styled.img`
width: 300px;
height:300px;
margin-left: 30px;
@media (max-width:668px) {
    width:100%;
    height:auto;
    margin-left:0;
}
`

const Text = styled.p`
width:40%;
height: auto;
text-align: left;
@media (max-width:668px) {
    width:100%;
    height: auto;
    padding:15px;
}
`
const TextBack = styled.h5`
font: 12px Montserrat, Arial, Helvetica, sans-serif;
text-transform: uppercase;
margin-left:10px;
`

export const NewsDetails = () => {
    const [news, setNews] = useState()
    const { newsId } = useParams()
    console.log(newsId)
    console.log(useParams())
    useEffect(() => {
        console.log()
        fetch(`http://localhost:8080/news/${newsId}`)
            // fetch(`https://aros-backend.herokuapp.com/news/${newsId}`)
            .then((res) => res.json())
            .then((json) => {
                setNews(json)
            })
    }, [newsId])
    console.log(news)
    return (
        <MainWrapperNewsDetails>

            {news && (
                <WrapperNewsDetails>
                    <H1>{news.title}</H1>
                    <WrapperTextImage>
                        <Text>{news.synopsis.split('\n').map((text) => {
                            return (
                                <>
                                    <span key={newsId}>
                                        {text}
                                        <br />
                                    </span>
                                </>
                            )
                        })}</Text>
                        <NewsImg src={news.imageUrl} alt={news.title} />
                    </WrapperTextImage>
                    <Link to="/NewsList" >
                        <LinkBack>
                            <BackArrow />
                            <TextBack>Nyheter</TextBack>
                        </LinkBack>
                    </Link>
                </WrapperNewsDetails>
            )
            }
        </MainWrapperNewsDetails >
    )
}
