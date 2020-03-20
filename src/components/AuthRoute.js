import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

export const AuthRoute = ({ component: Component, exact, path, isAdminRequired, ...rest }) => {
    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={props => {
                console.log("AuthRoute render, isAdminRequired = " + isAdminRequired)
                console.log("isAdmin = " + Cookies.get("isAdmin") + ", token = " + Cookies.get("access_token"))

                if (Cookies.get("access_token") && (Cookies.get("isAdmin") === "true" || isAdminRequired === "false")) {
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