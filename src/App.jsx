import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Content from './components/Content'
import Stats from './components/Stats'
import OurPrides from './components/ourPrides'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>

    <div className="d-flex flex-column gap-4">

      
      <NavBar/>
      <Hero/>
      <Content/>
      <OurPrides/>
      <Stats/>
      <Footer/>

    </div>
    
      
  
      

      

    
    </>
  )
}

export default App