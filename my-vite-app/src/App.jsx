import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
// import navbar

function App() {
  return (
    <div className="App">
      <Navbar/>
 
     
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/welcome" element={<Welcome />} /> 
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/About" element={<About/>} /> */}
        
        </Routes>
      </Router>
      {/* footer */}
    </div>
  );
}

export default App;

