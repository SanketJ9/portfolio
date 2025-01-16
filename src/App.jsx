import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Project from './components/Project'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Preloader from './components/Preloader'


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Preloader/>
    <div className="App" >
      <Intro />
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App
