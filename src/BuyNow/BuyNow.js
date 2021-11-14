import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import img1 from '../images/bgg.jpg';

const BuyNow = () => {

    const {user} = useAuth();
    console.log(user);






    const bgBuy = {
       background:`url(${img1})`,
       with:"50%"
    }

    return (
        <Box  style={bgBuy}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                
                
                <form onSubmit="">
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="name"
                        defaultValue={user?.displayName}
                        size="small"
                        />
                <TextField
                        disabled
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="email"
                        defaultValue={user?.email}
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="phone number"
                        defaultValue="Small"
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                        />
                        <Button
                        type="submit"
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                         variant="contained">Place Order</Button>
                         
                </form>

                </Grid>
                
                </Grid>

        </Box>
    );
};

export default BuyNow;