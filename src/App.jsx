import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'> 
      <NavBar />
      <Home />
      <Research />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App