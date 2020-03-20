import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
import AuthRoute from './components/AuthRoute'
import './index.css'
import { Logout } from 'components/Logout'


export const App = () => {
  return (

    <BrowserRouter>
      <div className="main-container">
        <header>
          <Nav />
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
          </Switch>
        </header>
        <Footer />
      </div>
    </BrowserRouter>

  )
}