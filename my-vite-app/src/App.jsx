import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
      <Homepage/>
      


     
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Homepage" element={<Homepage/>} />
          {/* <Route path="/About" element={<About/>} /> */}


        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

