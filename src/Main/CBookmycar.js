import React, { useState } from 'react';
import axios from 'axios';
import './Navbar1.css';

export default function CBookmycar() {
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password: '',
    contact:'',
    Cartype:'',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2005/insertbooking', formData);

      if (response.status === 200) {
        setFormData({ // Clear fields on success
            username:'',
            email:'',
            Enteramount: '',
            contact:'',
            Cartype:'',
        });
        setMessage(response.data); // Assuming response.data contains a success message
      }

      setError('');
    } 
    catch (error) {
        setError(error.response.data);
        setMessage('');
      }
  };

  return (
    <div>
      <h3 align="center"><u><b>BOOK A CAR</b></u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
<div className='card'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label><br/>
          <input type="text" id="username" onChange={handleChange} value={formData.username} required />
        </div>

        <div>
          <label>Email ID</label><br/>
          <input type="email" id="email" onChange={handleChange} value={formData.email} required />
        </div>

        

        <div>
          <label>Contact</label><br/>
          <input type="text" id="contact" onChange={handleChange} value={formData.contact} required />
        </div>
        <div>
          <label>Cartype</label><br/>
          <input type="text" id="Cartype" onChange={handleChange} value={formData.Cartype} required />
        </div>
        <div>
          <label>Enter the amount</label><br/>
          <input type="text" id="Enteramount" onChange={handleChange} value={formData.Enteramount} required />
        </div>
        
        &nbsp;&nbsp;

        <button type="submit" color='green'>Submit</button>
      </form>
    </div>
    </div>
  );
}
