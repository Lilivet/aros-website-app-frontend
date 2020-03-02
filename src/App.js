import React from 'react'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { Skydivers } from './components/Skydivers'
import { Footer } from './components/Footer'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NewsDetails } from 'components/NewsDetails'
import { NewsList } from 'components/NewsList'

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
          </Switch>
        </header>
        <Footer />
      </div>
    </BrowserRouter>

  )
}