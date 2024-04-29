import React from "react"
//import "./homepage.css"
import Navbar from './Navbar.jd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './EditUser';
import Video from './video';
import AllUsers from './AllUsers';
import AddTeams from './AddTeams';
import NewCars from './NewCars'
import RentCars from'./RentCars'
import Joke from './Joke'
import Profile from './Profile'
const homepage = ({setLoginUser}) => {
    return (
        <Router>
        <div className="homepage">
            <Navbar/>
             <Switch>
         <Route path='/' exact component={Video}/>
          <Route path='/all' exact component={AllUsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path="/NewCars" exact component={NewCars}/>
          <Route path="/RentCars" exact component={RentCars}/>
          <Route path="/Joke" exact component={Joke}/>
          <Route path="/Profile" exact component={Profile}/>

          <Route path='/edit/:id' exact component={EditUser}/>
       </Switch>  
            </div>
            </Router>
            
        
    )
}

export default homepage