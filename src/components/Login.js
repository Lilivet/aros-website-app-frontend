import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { auth } from '../reducers/auth'

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
// const URL = 'https://aros-backend.herokuapp.com/login'


export const Login = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [doRedirect, setDoRedirect] = useState(false)
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        console.log("In handleSumbit()")
        event.preventDefault()

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => {
                console.log("JSon: " + JSON.stringify(json))
                dispatch(auth.actions.setLoggedIn(json.loggedIn))
                console.log('after dispatch setLoggedIn')
                if (json.loggedIn) {
                    console.log("Updating auth")
                    dispatch(auth.actions.setAccessToken(json.accessToken))
                    dispatch(auth.actions.setUser(json.userId))
                    dispatch(auth.actions.setName(json.name))
                    dispatch(auth.actions.setIsAdmin(json.isAdmin))

                    setDoRedirect(true)
                } else {
                    dispatch(auth.actions.setIsAdmin(false))
                    setError("Wrong email or password")
                }
            }).catch(err => console.log('error:', err))
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

