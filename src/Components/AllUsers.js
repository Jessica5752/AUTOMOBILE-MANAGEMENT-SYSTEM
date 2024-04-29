import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button } from '@mui/material'
import { useEffect,useState } from 'react';
import axios from "axios";


const styledTable =styled(Table)`
width: 90%;
margin: 50px auto 0 auto ;
`
const Thead=styled(TableRow)`
background: #000000;
& > th{
  color:#fff;
  font-size:20px;
}
`
const Tbody=styled(TableRow)`
& > td{
  font-size: 20px;
}
`

const AllUsers=() =>{

  const [users,setUsers]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:1800/allcar');
            setUsers(response.data)
        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
}, [])

const deleteFaculty = async (_id) => {
    try {
        await axios.delete(`http://localhost:1800/car/${_id}`)
        const updateduser = users.filter(faculty => faculty._id !== _id)
        setUsers(updateduser);
    } catch (error) {
        console.log("Error deleting item", error);
    }
}
  return (
    <div>
     
      <br/>
      <h1 >My bookings</h1>
      <h2>Your Order is Placed</h2>
       <styledTable>
        <TableHead>
          <Thead>
            <TableCell>Company</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Model Number</TableCell>
            <TableCell>Fuel Type</TableCell>
            <TableCell>Date of Booking</TableCell>
            <TableCell>Date to be Delivered</TableCell>
            <TableCell>Rental/Buy a CAR</TableCell>          
          </Thead>
        </TableHead>
        <TableBody>      
          {
            users.map(user=>(
              <Tbody key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.TeamNumber}</TableCell>
                <TableCell>{user.subj}</TableCell>
                <TableCell>{user.pname}</TableCell>
                <TableCell>{user.startdate}</TableCell>
                <TableCell>{user.status1}</TableCell>
                <TableCell>
                  {/* <Button variant='contained'style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> */}
                  <Button variant='contained' color="secondary"onClick={()=>deleteFaculty(user._id)} >Cancel Order</Button> 
                </TableCell>
              </Tbody>
            ))
          }
          
        </TableBody>
       </styledTable>
    </div>
  )
}

export default AllUsers