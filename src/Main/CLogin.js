// clogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate, Routes } from 'react-router-dom';
import './Clogin.css'; // Import CSS file

export default function CLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2005/checkcutomerlogin', formData);
      console.log('Login Response:', response.data);

      if (response.data != null) {
        setMessage("Login Success");
        console.log('Login Successful');
       

        navigate(`/home/${formData.email}`); 
        setMessage("Login Success"); // Enclose the path in quotes and interpolate the email
// Pass email as a URL parameter
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      setMessage("");
      setError(error.message);
    }
    if (CLogin) {
      console.log('Login successful');
  } else {
    console.log.status(401).send('Login failed. Invalid username or password.');
  }
  };


  const handlesignup = () => {
    navigate('/cregister');
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3><u>Customer Login</u></h3>
      <h4 style={{ color: message ? "green" : "red" }}>
        {message ? message : error}
      </h4>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label><br/>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Password</label><br/>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="login-button">Login</button>
          <h4 style={{ marginTop: "10px",color: 'white' }}>
            No Account?
            <button className="register-button" onClick={handlesignup}>
              Register
            </button>
          </h4>
        </form>
      </div>
    </div>
  );
}