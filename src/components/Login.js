import React, { useState } from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom';

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

const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
height: 400px;
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
const ErrorText = styled.h2`
color: red;
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
background-color: #eee;
width: 350px;
outline:none;
margin:0;
height: 40px;
font-size: 20px;
line-height: 20px;

`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 10vh;
width:100%;

`
const Button = styled.button`
  background: transparent;
  color: #47476b;
  border: 3px solid #47476b;
  padding: 15px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size:14px;
  margin: 15px;
  &:hover {
    background: #a3a3c2;
    cursor: pointer;
  }
`
const LabelText = styled.label`
margin-bottom: 10px;
margin-top: 5px;
font-size: 18px;
`



const URL = 'http://localhost:8080/login'

export const Login = (props) => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [doRedirect, setDoRedirect] = useState(false)

    const handleSubmit = (event) => {
        console.log("In handleSumbit()")
        event.preventDefault()

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log('first step')
                if (res.ok) {
                    return res.json()

                } else {
                    setError("Wrong email or password")
                    throw new Error('Wrong email or password')
                }
            })
            .then(json => {
                console.log(json)
                Cookies.set("access_token", json.accessToken)
                Cookies.set("isAdmin", json.isAdmin)
                setDoRedirect(true);
            })
            .catch(err => console.log('error:', err))
    }

    if (doRedirect) {
        return <Redirect to="/registerMember" />
    }

    return (
        <Wrapper>
            <LoginForm onSubmit={handleSubmit}>
                <Title>Login</Title>
                <ErrorText>{error}</ErrorText>
                <LabelText>
                    <Input required
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="email"
                    />
                </LabelText>
                <LabelText>
                    <Input required
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="password"
                    />
                </LabelText>
                <ButtonWrapper>
                    <Button type="submit"
                        onClick={handleSubmit}>
                        LOGIN
                </Button>
                </ButtonWrapper>
            </LoginForm>
        </Wrapper>
    )
}

