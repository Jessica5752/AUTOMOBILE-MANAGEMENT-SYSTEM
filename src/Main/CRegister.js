import React, { useState } from 'react';
import axios from 'axios';
import './Navbar1.css';
import { colors } from '@mui/material';

export default function CRegistration() {
  const [userType,setuserType]=useState("");
  const [Secretkey,setSecretkey]=useState("");
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password: '',
    contact:'',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userType == "Admin" && Secretkey!="abc"){
      alert("Invalid admin")
      
    }else{
      e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2005/insertcustomer', formData);

      if (response.status === 200) {
        setFormData({ // Clear fields on success
            username:'',
            email:'',
            password: '',
            contact:'',
            userType:'',
        });
        setMessage(response.data); // Assuming response.data contains a success message
      }

      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }

    }
    
  };

  return (
    <div>
      <h3 align="center"><u><b>Customer Registration</b></u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
      <div>
      <h3 style={{ color: 'white' }}> 
      Register As:
      <input
        type="radio"
        name="UserType"
        value="User"
        style={{ color: 'white' }}
        onChange={(e) => setuserType(e.target.value)}
        />
        User
        <input
        type="radio"
        name="UserType"
        value="Admin"
        style={{ color: 'white' }}
        onChange={(e) => setuserType(e.target.value)}
        />
        Admin</h3>
        
      </div>
<div className='card'>
      <form onSubmit={handleSubmit}>
      {userType == "Admin" ? (
      <div>
        <label>Secretkey</label><br/>
        <input type="text" id="Secretkey" onChange={handleChange} value={formData.Secertkey} required />
      </div>
      ) : null}
      
        <div>
          <label>Username</label><br/>
          <input type="text" id="username" onChange={handleChange} value={formData.username} required />
        </div>

        <div>
          <label>Email ID</label><br/>
          <input type="email" id="email" onChange={handleChange} value={formData.email} required />
        </div>

        <div>
          <label>Password</label><br/>
          <input type="password" id="password" onChange={handleChange} value={formData.password} required />
        </div>

        <div>
          <label>Contact</label><br/>
          <input type="text" id="contact" onChange={handleChange} value={formData.contact} required />
        </div>
        
        &nbsp;&nbsp;

        <button type="submit" color='green'>Submit</button>
      </form>
    </div>
    </div>
  );
}
