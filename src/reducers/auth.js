import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    name: '',
    email: '',
    userId: '',
    accessToken: '',
    isAdmin: false,
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload

        },
        setUser: (state, action) => {
            state.userId = action.payload
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        logout: (state) => {
            state.accessToken = ''
            state.loggedIn = false
            state.isAdmin = false
        }
    }
})