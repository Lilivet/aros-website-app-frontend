import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { BackendUrl } from './BackendUrl'

const Wrapper = styled.section`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
margin-top: 30px;
margin-bottom:250px;
width: 100%;
height: 100%;
padding: 10px;
`
const NewsForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
height: 500px;
border-bottom:2px solid #c4c3c0;
border-right:2px solid #c4c3c0;
border-radius: 5px;
background-color: white;
`
const Title = styled.h1`
color: #47476b;
text-transform: uppercase;
font-size:40px;
`

const Input = styled.input`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0px 10px;
border-style: hidden;
border-radius: 5px;
border-bottom: 2px solid black;
border-color: ${props => (props.className === "error") ? "red" : "#eee"};
background-color: #eee;
outline:none;
width: 350px;
margin-top:10px;
height: 40px;
font-size: 20px;
line-height: 20px;
`

const Button = styled.button`
background: transparent;
color: #47476b;
border: 3px solid #47476b;
padding: 15px;
border-radius: 20px;
text-transform: uppercase;
font-size: 14px;
margin: 15px;
  &: hover {
    background: #a3a3c2;
    cursor: pointer;
}
`
const LabelText = styled.label`
margin-bottom: 10px;
margin-top: 5px;
margin-left: 3px;
font-size: 18px;
text-align: left;
text-aling-padding-left:10px;
padding-left:10px;
`
const ErrorText = styled.h2`
color: red;
`
const SuccessText = styled.h2`
color: green;
`

const URL = BackendUrl + '/news'

export const FormNews = () => {
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [shortSynopsis, setShortSynopsis] = useState('')
    const [image, setImage] = useState('')
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const accessToken = useSelector((store) => store.auth.accessToken)


    //Handle image selection

    const handleSelectImage = (image) => {
        setImage(image)
        // if no image selected
        if (!image) {
            console.log('no image selected')
        } else {
            dispatch()
        }
    }
    const handleFetch = async () => {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ title, synopsis, shortSynopsis, image }),
            headers: { 'Content-Type': 'application/json', 'Authorization': accessToken }
        })
        const json = response.json()
        return json
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        handleFetch()
            .then(json => {
                console.log("Json: " + JSON.stringify(json))
                setSuccess(json.success)

                if (json.success === true) {
                    setTitle('')
                    setSynopsis('')
                    setShortSynopsis('')
                    setImage('')
                    setError('')
                } else {
                    console.log("Error: " + json.message)
                    setError(json.message)
                }
            })
            .catch(err => {
                console.log('error:', err)
                setError(err)
            })
    }
    let isTextValid = title.length > 3
    let titleClass = isTextValid ? {} : { className: "error" }
    let synopsisClass = isTextValid ? {} : { className: "error" }

    return (
        <Wrapper>
            <Title>News Form</Title>
            <ErrorText>{error}</ErrorText>
            <NewsForm onSubmit={handleSubmit}>
                <LabelText> title:
                <Input required
                        type="text"
                        {...titleClass}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        placeholder="Title..."
                    />
                </LabelText>
                <LabelText> Synopsis:
                <Input required
                        type="text"
                        {...synopsisClass}
                        value={synopsis}
                        onChange={event => setSynopsis(event.target.value)}
                        rows="6"
                        placeholder="Start writing here..."
                    />
                </LabelText>
                <LabelText>
                    Short synopsis:
                <Input required
                        type="text"
                        {...synopsisClass}
                        value={shortSynopsis}
                        onChange={event => setShortSynopsis(event.target.value)}
                        rows="4"
                        placeholder="Start writing here..."
                    />
                </LabelText>
                <LabelText> Upload an image:
                <Input
                        type="file"
                        onChange={event => handleSelectImage(event.target.files[0])}
                        accept=".jpg,.png"
                    />
                </LabelText>
                <Button type="submit" onClick={handleSubmit}>
                    SUBMIT
                    </Button>
            </NewsForm>
            <SuccessText>{success ? "New news have been successfully uploaded" : ""}</SuccessText>
        </Wrapper>
    )
}
