import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Charities from './components/Charities';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/charities" element={<Charities />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;

