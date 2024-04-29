import { Button, colors } from "@mui/material";
import axios from 'axios';
function Update() {
     function handleUpdate(event) {
             event.preventDefault();
             axios.post('mongodb://localhost:27017/update',{
              un:document.getElementsByName('un')[0].value, 
              pw:document.getElementsByName('pw')[0].value,
              ro:document.getElementsByName('ro')[0].value,
              em:document.getElementsByName('em')[0].value,
            }).then((response)=>{
                console.log(response.data);
            })    
     }
return (
    <center>
        <form >
        <br /><br />
        <label style={{ color: 'white' }}>UserName:</label>
                <input type="text" name='un' /><br /><br />
                <label style={{ color: 'white' }}>Password:</label>
                <input type="password" name="pw" /><br /><br />
                <label style={{ color: 'white' }}>Contact:</label>
                <input type="text" name="ro" /><br /><br />
                <label style={{ color: 'white' }}>Email:</label>
                <input type="text" name="em" /><br /><br />
                <button onClick={handleUpdate}>Update</button>
            
        </form>
    </center>
)
}
export default Update;