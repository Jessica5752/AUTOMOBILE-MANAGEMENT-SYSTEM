import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import CLogin from './CLogin';
import CRegister from './CRegister';
import CAdmin from './CAdmin';
import CUsers from './CUsers';
import CDelete from './CDelete';
import CUpdate from './CUpdate';
import CCars from './CCars';

import CBookmycar from './CBookmycar';
import CarRegistration from '../Seller/CarRegistration';
import './Navbar1.css'; // Import your CSS file

export default function Navbar() {
  return (
    <div>
    <div className="navbar-container">
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">HOME</Link>
          </li>
          <li className="navbar-item">
            <Link to="/clogin">LOGIN</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cregister">REGISTER</Link>
          </li>
          <li className="navbar-item">
            <Link to="/carregister">REGISTER CAR</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cbookmycar">BOOK MY CAR</Link>
          </li>
          <li className="navbar-item">
            <Link to="/ccars">CARS</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cadmin">ADMIN</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cusers">USERS</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cdelete">DELETE</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cupdate">UPDATE</Link>
          </li>
          
        </ul>
      </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/clogin" element={<CLogin />} />
        <Route path="/cregister" element={<CRegister />} />
        <Route path='/carregister' element={<CarRegistration/>}/>
        <Route path='/cbookmycar' element={<CBookmycar />}/>
        <Route path='/ccars' element={<CCars />}/>
        <Route path='/cadmin' element={<CAdmin />}/>
        <Route path='/cusers' element={<CUsers />}/>
        
        <Route path='/cdelete' element={<CDelete />}/>
        <Route path='/cupdate' element={<CUpdate />}/>
        
      </Routes>
    </div>
  );
}
