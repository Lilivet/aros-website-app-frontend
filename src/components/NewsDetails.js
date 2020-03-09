import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackArrow } from '../images/BackArrow'
import style from 'styled-components'
// import moment from 'moment'
import '../index.css'

const MainWrapperNewsDetails = style.main`
display: flex;
flex-direction:column;
align-items: center;
width:100%;
padding-bottom:300px;

`

const Img = style.svg`
width: 30px;
margin-left: 5px;
`


export const NewsDetails = () => {
    const [news, setNews] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8080/news/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setNews(json)
            })
    }, [id])

    return (
        <MainWrapperNewsDetails>
            <Link to="/NewsList">
                <Img src={BackArrow} alt="Back to AROS News" /> Back to AROS News
             </Link>
            {news && (
                <div>
                    <h1>{news.title}</h1>
                    <div>
                        <img src={news.imageUrl} alt={news.title} />
                        <p>{news.synopsis}</p>
                    </div>
                </div>
            )
            }
        </MainWrapperNewsDetails >
    )
}
