import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <Hero/>
    </div>
  )
}

export default App