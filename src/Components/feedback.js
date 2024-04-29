import {useState,useEffect} from 'react';
import axios from 'axios';
function Login() {
  const [studName,setName]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studNumber:studNumber,});
    console.log(studName,studNumber);
  }
  return (
    <div className="Login">
        <center>
      <h1>Fill The Feedback Form</h1>
<label>Write Your Feedback Here </label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>Mobile number </label><br/>
<input type="number"
onChange={(event)=>setNumber(event.target.value)}/><br/>
<button onClick={addToList}>Submit</button>
    <h1>Your Feedback</h1>
    <h1> I bought a car by usimg</h1>
    {studList.map((val,key)=>{
  return <div key={key}>
    <h1>{val.name}</h1>
    <h1>{val.htno}</h1>
  </div>
  })}
  </center>
  
    </div>
  );
}

export default Login;