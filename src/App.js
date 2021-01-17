import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const linkcolor = "#ccc";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Code for America</h1>
        <h3>amplifyapp site 0.231</h3>
        <a href="https://model.earth/amplify/AWS/" style={{color:linkcolor}}>notes</a>
      </header>
    </div>
  );
}

export default App;