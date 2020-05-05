import React from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Intro from './components/Intro'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import TimeLineComponent from './components/Timeline'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Profile/>
      <Projects/>
      <TimeLineComponent/>
      <Footer/>
    </div>
  )}


export default App;
