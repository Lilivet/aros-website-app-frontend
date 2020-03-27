import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: localStorage.getItem("loggedIn"),
    name: localStorage.getItem("name"),
    email: '',
    userId: '',
    accessToken: localStorage.getItem("accessToken"),
    isAdmin: localStorage.getItem("isAdmin"),
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
            localStorage.setItem("accessToken", action.payload)
        },
        setUser: (state, action) => {
            state.userId = action.payload
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
            localStorage.setItem("loggedIn", action.payload)
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload
            localStorage.setItem("isAdmin", action.payload)
        },
        setName: (state, action) => {
            state.name = action.payload
            localStorage.setItem("name", action.payload)
        },
        // setLoggedOut: (state, action) => {
        //     state.loggedIn = false;
        //     localStorage.clear();
        //     sessionStorage.clear();
        logout: (state) => {
            state.accessToken = ''
            state.loggedIn = false
            state.isAdmin = false
            localStorage.clear()
        }
    }
})