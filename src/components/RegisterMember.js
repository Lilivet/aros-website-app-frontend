import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cookies from 'js-cookie'

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
`;
const SignupForm = styled.form`
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
border-color: ${props => (props.class === "error") ? "red" : "#eee"};
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


// const URL = 'http://localhost:8080/registerMembers'
const URL = 'https://aros-backend.herokuapp.com/registerMembers'

export const RegisterMember = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const adminCheckBox = React.createRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        let isAdmin = adminCheckBox.current.checked
        console.log("Sending isAdmin = " + isAdmin)

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ name, email, password, isAdmin }),
            headers: { 'Content-Type': 'application/json', 'Authorization': Cookies.get("access_token") }
        })
            .then(res => {
                res.json()
                // if (res.status === 201)
            })
            .then(json => console.log(json))
            .catch(err => console.log('error:', err))
    }

    let isNameValid = name.length > 3
    let isEmailValid = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    let nameClass = isNameValid ? {} : { class: "error" }
    let emailClass = isEmailValid ? {} : { class: "error" }

    return (
        <Wrapper>
            <Title>Register a new Member</Title>
            <SignupForm onSubmit={handleSubmit}>
                <LabelText> name:
                <Input required
                        type="text"
                        {...nameClass}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="name"
                    />
                </LabelText>
                <LabelText> e-mail:
                <Input required
                        type="text"
                        {...emailClass}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="email"
                    />
                </LabelText>
                <LabelText>
                    password:
                <Input required
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="password"
                    />
                </LabelText>
                <LabelText> Admin:
                <Input required
                        type="checkbox"
                        ref={adminCheckBox}
                    />
                </LabelText>
                <Button type="submit" onClick={handleSubmit}>
                    REGISTER
                    </Button>
            </SignupForm>

        </Wrapper>
    )
}