// App.js
import React from 'react';
import Navbar from './Main/Navbar'; // Import your Navbar component
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{color:"white"}}>Auto Mobile Managment System</h3>
      <Router>
      <Navbar />
      <details />
      </Router>
    </div>
  );
}

export default App;