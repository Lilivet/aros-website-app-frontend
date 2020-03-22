import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from 'styled-components'
import moment from 'moment'
import '../index.css'

const MainWrapperNewsList = style.div`
display: flex;
flex-direction:column;
align-items: center;
width:100%;
padding-bottom:300px;
`
const NewsListWrapper = style.div`
display: flex;
flex-wrap:wrap;
// border: 2px solid red;
`
const NewsListContainer = style.div`
display:flex;
align-items: center;
justify content: center;
flex-direction: column;
//border: 2px solid red;
width:33%;
padding:10px;
@media (max-width:500px) {
    width:100%;
    height: auto;
    align-content:stretch;
}
@media (min-width:501px) and (max-width:800px) {
    width:50%;
    height:auto;
    align-content:stretch;
}
`
const Img = style.img`
Width:100%;
height:auto;
align-item: center;
// @media (max-width:668px) {
//     width:100%;
// }

`
const WrappText = style.form`
width:100%;
height: auto;
text-align: center;
// border:2px solid blue;
background-color: white;
height:200px;
@media (max-width:668px) {
    padding:10px;
    padding-top:0;
    margin-top:0;
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

export const NewsList = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/news/newsList')
            // fetch('https://aros-backend.herokuapp.com/news/newsList')
            .then((res) => res.json())
            .then((json) => {
                setNews(json)
            })
    }, [])

    return (
        <MainWrapperNewsList>
            <H1> AROS NYHETER</H1>
            <NewsListWrapper>
                {news.map((newsItem) => (
                    <NewsListContainer >
                        <Link to={`/newsDetails/${newsItem._id}`} key={newsItem._id}>

                            <Img src={newsItem.imageUrl} alt={newsItem.title} />
                            <WrappText>
                                <h2>{newsItem.title}</h2>
                                <p>{newsItem.shortSynopsis} ...</p>
                                <p>{moment(newsItem.createdAt).format("MMMM Do YYYY")}</p>
                            </WrappText>

                        </Link>
                    </NewsListContainer>
                ))}
            </NewsListWrapper>
        </MainWrapperNewsList >

    )
}