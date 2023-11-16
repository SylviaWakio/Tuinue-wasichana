import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = document.getElementById("role").value;

    if (authenticateUser(email, password)) {
      alert("Login successful! Redirecting to the main page...");
      window.location.href = '/';
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("role").value;

    if (validateEmail(email) && registerUser(username, email, password)) {
      alert("Account registered successfully. You can now log in.");
      setIsLoginForm(true);
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  async function authenticateUser(email, password) {
    try {
      const response = await fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Authentication error:", error);
      return false;
    }
  }

  async function registerUser(username, email, password) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  }

  return (
    <div className="section">
      <div className="overlap-group">
      </div>
    <div>
      <h1>{isLoginForm ? 'Login' : 'Sign Up'}</h1>
      {isLoginForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="text-black" 
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="text-black" 
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select id="role" required>
              <option value="admin">Admin</option>
              <option value="donor">Donor</option>
              <option value="others">Others</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="Name"
              placeholder="Enter your name"
              required
              className="text-black" 
            />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              placeholder="Enter your username"
              required
              className="text-black" 
            />
          </div>
          <div>
            <label htmlFor="signup-email">Username</label>
            <input
              type="text"
              id="signup-email"
              placeholder="Enter your email"
              required
              className="text-black" 
            />
          </div>

          <div>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label htmlFor="role">Role</label>
            <select id="role" required>
              <option value="donor">Donor</option>
              <option value="admin">Admin</option>
              <option value="others">Others</option>
            </select>
          </div>
          
          <button type="submit">Sign Up</button>
        </form>
      )}
      <p>
        {isLoginForm ? "Don't have an account? " : "Already have an account? "}
        <span onClick={toggleForm}>
          Sign {isLoginForm ? 'up' : 'in'}
        </span>
      </p>
    </div>
    </div>
  );
}

export default Signup;
