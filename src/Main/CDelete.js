import { Button } from "@mui/material";
import axios from 'axios';

function Delete() {
    function handledel(event) {
        event.preventDefault();
        axios.post('mongodb://localhost:27017/deletecustomer',{
            
          un:document.getElementsByName('un')[0].value,
          pw:document.getElementsByName('pw')[0].value
}).then((response)=>{
    console.log(response.data);
    })
    }
return (
<center>
    <form>
    <br></br>
           <label style={{ color: 'white' }}>Username:</label>
            <input type="text" name="un" /><br /><br />
            <label style={{ color: 'white' }}>Password:</label>
            <input type="password" name="pw" /><br /><br />
            
        <button onClick={handledel}>Delete</button>
    </form>
</center>
);
}
export default Delete;