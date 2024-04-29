import React, { useState } from 'react';
import axios from 'axios';
import '../Main/Navbar1.css'

export default function Registration() {
  const [formData, setFormData] = useState({
    carname:'',
    email:'',
    cost:'',
    milage:'',
    type:'',
    model:'',
    fuel:'',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('carname', formData.carname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('cost', formData.cost);
      formDataToSend.append('milage', formData.milage);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('model', formData.model);
      formDataToSend.append('fuel', formData.fuel);
      formDataToSend.append('image', formData.image);

      const response = await axios.post('http://localhost:2005/insertcar', formDataToSend);

      if (response.status === 200) {
        setFormData({ // Clear fields on success
          carname:'',
          email:'',
          cost:'',
          milage:'',
          type:'',
          model:'',
          fuel:'',
          image: null,
        });
        setMessage(response.data); // Assuming response.data contains a success message
      }

      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className='card'>
      <h3 align="center"><u><b>Car Registration</b></u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>CAR Name</label><br/>
          <input type="text" id="carname" onChange={handleChange} value={formData.carname} required />
        </div>

        <div>
          <label>Email ID</label><br/>
          <input type="text" id="email" onChange={handleChange} value={formData.email} required />
        </div>

        <div>
          <label>Cost</label><br/>
          <input type="number" id="cost" onChange={handleChange} value={formData.cost} required />
        </div>

        <div>
          <label>Mileage</label><br/>
          <input type="number" id="milage" onChange={handleChange} value={formData.mileage} required />
        </div>

        <div className='side-by-side'><br/>
          <label>Type</label>&nbsp;&nbsp;
          <select id="type" onChange={handleChange} value={formData.type} required>
            <option value="">Select Type</option>
            <option value="small">Automate</option>
            <option value="medium">Manual</option>
          </select>
        </div>

        <div className='side-by-side'><br/>
          <label>Model</label>&nbsp;&nbsp;
          <select id="model" onChange={handleChange} value={formData.model} required>
            <option value="">Select Model</option>
            <option value="small">Old</option>
            <option value="medium">New</option>
          </select>
        </div>

        <div className='side-by-side'><br/>
          <label>Fuel</label>&nbsp;&nbsp;
          <select id="fuel" onChange={handleChange} value={formData.fuel} required>
            <option value="">Select fuel</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
          </select>
        </div>

        &nbsp;&nbsp;

        <div className='side-by-side'><br/>
          <label>Upload Image</label>
          <input type="file" id="image" onChange={handleChange} accept="image/*" required />
        </div>

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}