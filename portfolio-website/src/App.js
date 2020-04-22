import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pdf from "./resume/Resume_Kevin_Maguire.pdf"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href= {Pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Site is currently under development.  Please see my resume.
        </a>
      </header>
    </div>
  );
}

export default App;
