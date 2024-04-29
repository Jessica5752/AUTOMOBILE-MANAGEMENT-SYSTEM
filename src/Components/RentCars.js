import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import one from './audir.jpg'
import two from './bmwr.jpg'
import three from './benz.jpg'
import { Button } from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Id() {

  return (<div  >
    <h1> Vehicles For Rent </h1>
    <div style={{display:'flex',flexWrap:'noWrap'}}>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :9}}>
      
      <CardMedia
      
        sx={{ maxWidth: 290 }}
        component="img"
        alt="man"
        height="250"
        image={one}
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
        <b>AUDI</b><br></br>
        <b>Modelnumber : Audi R8 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Rent Price for day:₹ 2.00 Lakh</b><br></br>
          <b>Available : Yes</b>
          <br></br>
          <Link to="/add">
          <button >RENT</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 300 }}
        component="img"
        alt="man"
        height="250"
        image={two}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>BMW</b><br></br>
        <b>Modelnumber: BMW X7 </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Rent Price for day:₹ 5.89 Lakh</b><br></br>
                    <b>Available : Yes</b><br></br>
          <Link to="/add">
          <button >RENT</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 350, minHeight: 400, margin :8}}>
      <CardMedia
        sx={{ maxWidth: 290 }}
        component="img"
        alt="man"
        height="250"
        image={three}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>BENZ</b><br></br>
        <b>Modelnumber: Benz-SUV </b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                    <b>Rent Price for day:₹ 5.00 Lakh</b><br></br>
                    <b>Available : Yes</b>
          <br></br>
          <Link to="/add">
          <button >RENT</button>
        </Link>
        </Typography>
      </CardContent>
    </Card>
    <br/>
    
    </div>
    <h3>AMS</h3>
    </div>
    
  );
}