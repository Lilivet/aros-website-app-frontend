import React from 'react'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { Skydivers } from './components/Skydivers'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (

    <BrowserRouter>
      <main>
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
        </Switch>
      </main>
    </BrowserRouter>

  )
}