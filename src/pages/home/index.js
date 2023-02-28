import React from 'react'
import logo from '../../logo.svg'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        className="App-link"
        to='/products'
        // href="https://reactjs.org"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Products Management Pages
      </Link>
    </header>
  </div>
  )
}

export default Home