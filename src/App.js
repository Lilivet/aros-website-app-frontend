import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { Skydivers } from './components/Skydivers'
import { Footer } from './components/Footer'
import { LearnToSkydive } from './components/LearnToSkydive'
import { NewsDetails } from './components/NewsDetails'
import { NewsList } from './components/NewsList'
import { Login } from './components/Login'
import { RegisterMember } from './components/RegisterMember'
// import { FormNews } from './components/FormNews'
import { auth } from './reducers/auth'
import AuthRoute from './components/AuthRoute'
import './index.css'
import { Logout } from 'components/Logout'


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const reducer = combineReducers({
  auth: auth.reducer
})

const store = configureStore({ reducer })


export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="main-container">
          <Nav />
          <div className="contentWrapper">
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/skydivers" exact>
                <Skydivers />
              </Route>
              <Route path="/newsList">
                <NewsList />
              </Route>
              <Route path="/newsDetails/:newsId">
                <NewsDetails />
              </Route>
              <Route path="/learnToSkydive">
                <LearnToSkydive />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <AuthRoute exact path="/registerMember" isAdminRequired={true} component={RegisterMember} />
              {/* <AuthRoute exact path="/formNews" isAdminRequired={true} component={FormNews} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}