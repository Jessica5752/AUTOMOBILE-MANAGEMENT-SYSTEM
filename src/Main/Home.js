import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:2005/viewcar');
      setCars(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const cardStyle = {
    border: '1px solid #ccc',
    margin: '10px',
    padding: '10px',
    width: '200px',
    textAlign: 'center',
  };

  const hoverStyle = {
    backgroundColor: '#681f1f',
  };

  return (
    <div>
      <h2 align='center' style={{ color: 'white' }}>Welcome </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cars.map((car, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(car.isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setCars(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: true } : item)))}
            onMouseLeave={() => setCars(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: false } : item)))}
          >
            {car.image && (
              <img
                src={`data:${car.image.contentType};base64,${car.image.data}`}
                alt=""
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
             <h3 style={{ color: 'white' }}>{car.carname}</h3>
             <a href="ccars"><button>CHECK</button></a>
            
          </div>
        ))}
      </div>
    </div>
  );
}
