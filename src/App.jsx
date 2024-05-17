import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Teaching from './components/Teaching'
import Research from './components/Research'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'> 
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Teaching />
      <Research />
      <Footer />
    </div>
  )
}

export default App
