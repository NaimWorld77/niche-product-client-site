import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrder = () => {

    const {user} = useAuth();
    const [orders,setOrders] = useState([]);


    useEffect(()=>{
        const url =`https://shrouded-taiga-61011.herokuapp.com/buyerinfo?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    
    


    return (
        <>
            <h2>My Total Order is {orders.length}</h2>
            <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ProductName</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">CustomarName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{row.productPrice}$</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.customarName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
        </>
    );
};

export default MyOrder;