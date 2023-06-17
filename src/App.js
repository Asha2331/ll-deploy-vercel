import React, { useState } from 'react';
import logo from "./images/logo.jpg";
import email from "./images/mail.jpg";
import key from "./images/key.jpg";
import lock from "./images/lock.jpg";
import './App.css'; 

const App = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', Username);
    console.log('Password:', password);
  };

  
  return (
    <div className="main">
      <div className="submain">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <div className="line"></div>
        </div>
        <h2 className="heading">Admin Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-field" >
            <input type="text" placeholder="Username"  name="Username" value={Username} onChange={handleUsername}/>
            <img src={email} alt="email icon" className="input-icon" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" name="password" value={password} onChange={handlePassword}/>
            <img src={lock} alt="lock icon" className="input-icon" />
          </div>
        </div>
        <button className="submit-button">Sign In</button>
        </form>
        <div className="forgot-password">
          <img src={key} alt="key icon" className="key-icon" />
          <span className="forgot-password-text">Forgot Password?</span>
          
        </div>
      </div>
    </div>
  );
};

export default App;