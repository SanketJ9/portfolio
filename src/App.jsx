import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Project from './components/Project'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="App" >
      <Intro />
      <Project />
      <Contact />
    </div>
  )
}

export default App
