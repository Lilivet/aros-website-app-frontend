import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const NewsList = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('URL')
            .then((res) => res.json())
            .then((json) => {
                setNews(json.newest)
            })
    }, [])

    return (
        <div>
            {news.map((news) => (
                <div key='news._id'>
                    <h2>{news.title}</h2>
                    <p>{news.date}</p>
                    <Link to={`/NewsDetails/${news._id}`}>more...</Link>
                </div>
            ))}
        </div>

    )
}