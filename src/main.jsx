import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav'
import Hero from './components/hero'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
  </React.StrictMode>,
)
