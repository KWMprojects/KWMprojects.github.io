import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Pdf from "./resume/Resume_Kevin_Maguire.pdf"
import Particles from 'react-particles-js'
import HeaderAnimation from './components/headerAnimation'
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderAnimation/>
    </div>
  );
}

export default App;
