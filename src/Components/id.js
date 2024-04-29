import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import one from './newcar.jpg'
import two from './rent.jpg'

import { Button } from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Id() {

  return (<div  >
    
    <div style={{display:'flex',flexWrap:'noWrap'}}>
    <Card sx={{ maxWidth: 1600, minHeight: 266, margin :9}}>
      
      <CardMedia
      
        sx={{ maxWidth: 700 }}
        component="img"
        alt="man"
        height="266"
        image={one}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>Mode of Purchase </b>
        </Typography>
       
          <Link to="/NewCar">
          <button >NewCar</button>
        </Link>
        <br/>
        <br/>
        <Typography gutterBottom variant="h5" component="div">
        
        
        </Typography>
        <Link to="/RentCar">
          <button >RentCar</button>
        </Link>
      </CardContent>
    {/* </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 360 }}
        component="img"
        alt="man"
        height="250"
        image={two}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Rent Cars</b><br></br>
        <b>Click Here To check Rent Cars  </b>
        </Typography>
       
          <Link to="/RentCars">
          <button >Rent Cars</button>
        </Link>
       
      </CardContent> */}
    
    </Card>
    <br/>
    
    </div>
    <h3>Copy Rights Reserved By Batch 10</h3>
    </div>
    
  );
}