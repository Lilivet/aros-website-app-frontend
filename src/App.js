import React from 'react'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { Skydivers } from './components/Skydivers'
import { Footer } from './components/Footer'
import { LearnToSkydive } from './components/LearnToSkydive'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NewsDetails } from 'components/NewsDetails'
import { NewsList } from 'components/NewsList'
import { Login } from 'components/Login'
// import { Session } from './components/Session'
// import { Provider } from "react-redux";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { auth } from "./reducers/auth";

// const reducer = combineReducers({
//   auth: auth.reducer
// });

// const store = configureStore({ reducer });

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
            <Route path="/Skydivers" exact>
              <Skydivers />
            </Route>
            <Route path="/newsList">
              <NewsList />
            </Route>
            <Route path="/newsDetails/:newsId">
              <NewsDetails />
            </Route>
            <Route path="/LearnToSkydive">
              <LearnToSkydive />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </header>
        <Footer />
      </div>
    </BrowserRouter>

  )
}