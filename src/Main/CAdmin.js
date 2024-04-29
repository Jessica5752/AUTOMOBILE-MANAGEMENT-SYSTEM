// clogin.js
import React, { useState } from 'react';
import axios from 'axios';
import CAdmin from './CAdmin';
import CUsers from './CUsers';
import CDelete from './CDelete';
import CUpdate from './CUpdate';
import { Link, Route, useNavigate, Routes } from 'react-router-dom';
import './Clogin.css'; // Import CSS file

export default function CLogin() {
 

  return (
    <div style={{ textAlign: "center" }}>
      <h3><u>Admin Page</u></h3> 
     <div style={{ textAlign: "LEFT" }}>
        <h4><u>Components</u>
        </h4>
        <a href="cusers"><button>USERS</button></a><br></br>
        <a href="cdelete"><button>DELETE</button></a><br></br>
        <a href="cupdate"><button>UPDATE</button></a><br></br>
        <a href="home"><button>HOME</button></a><br></br>
        <a href="clogin"><button>LOGIN</button></a><br></br>
        <a href="cregister"><button>REGISTER</button></a><br></br>
        <a href="ccars"><button>CARS</button></a><br></br>
        <a href="carregister"><button>CAR REGISTER</button></a><br></br>
        <a href="cbookmycar"><button>PAYMENT</button></a><br></br>
      
      </div>
</div>
     
  );
}