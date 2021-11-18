import { Button } from '@mui/material';
import React, { useState } from 'react';
import css from './SingleOrder.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleOrder = ({order}) => {

    const {customarName,email,productPrice,productName,phone,address} = order;


    const handleDelete = id =>{
        const url =`https://shrouded-taiga-61011.herokuapp.com/buyerinfo/${id}`
        fetch(url,{
            
            method:'DELETE',
           
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data);
            alert('deteleted successfully done');
        })
    }


    return (
        <div>
             <Card sx={{ minWidth: 275,margin:4 }}>
            <CardContent>
                <Typography variant="h5" color="success.main" gutterBottom>
                Customar Name: {customarName}
                </Typography>
                <Typography variant="h5"  gutterBottom>
                Phone: {phone}
                </Typography>
                <Typography variant="h5"  gutterBottom>
                Product Name: {productName}
                </Typography>
                <Typography variant="h5"  gutterBottom>
                Product Price: {productPrice}
                </Typography>
                <Typography variant="h5"  gutterBottom>
                Address: {address}
                </Typography>
                <Typography variant="h5"  gutterBottom>
                Email: {email}
                </Typography>
                <Button onClick={()=>handleDelete(order._id)} variant="contained">delete Order</Button>
                
                            
            </CardContent>
            
            </Card>
            
        </div>
    );
};

export default SingleOrder;