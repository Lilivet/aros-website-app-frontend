import React from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../reducers/auth'
import { Redirect } from 'react-router-dom'

export const Logout = () => {
    const dispatch = useDispatch()
    dispatch(auth.actions.logout())

    return (
        <Redirect push to="/" />

    )
}