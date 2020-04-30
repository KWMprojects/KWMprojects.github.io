import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import HeaderAnimation from './components/headerAnimation'
import './App.css'
import Profile from './components/Profile'
import Intro from './components/Intro'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Intro/>
      <HeaderAnimation/>
      <NavBar/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App;
