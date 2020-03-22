import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AuthRoute = ({ component: Component, exact, path, isAdminRequired, ...rest }) => {
    const auth = useSelector((store) => store.auth)

    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={props => {

                console.log("AuthRoute render, isAdminRequired = " + isAdminRequired)
                console.log("Auth.loggedIn = " + auth.loggedIn + ", isAdmin = " + auth.isAdmin)
                //console.log("isAdmin = " + Cookies.get("isAdmin") + ", token = " + Cookies.get("access_token"))

                if (auth.loggedIn && (auth.isAdmin === true || isAdminRequired === false)) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }} />
    )
}

export default AuthRoute