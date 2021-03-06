import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import img1 from '../../../images/ssl-commerce.png';

const Footer = () => {

    return (
        
        <Box sx={{ flexGrow: 1,bgcolor: 'success.main',mt:8,my:2}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
           
            <Grid item xs={12} sm={6} md={6}>
            <Typography style={{color:'white'}} variant="h5">
            STAY CONNECTED
            </Typography>
               <Box sx={{my:2}}>
                <i style={{color:'tomato'}}  className="fab fa-instagram"></i>
                <br />
                <i style={{color:'tomato'}} className="fab fa-twitter-square"></i>
                <br />
                <i style={{color:'tomato'}} className="fab fa-facebook"></i>
                <br />
                <i style={{color:'tomato'}} className="fas fa-envelope-square"></i>
               </Box>
               <img src={img1} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Typography style={{color:'white'}} variant="h5">
            CUSTOMER CARE
            </Typography>
            <Box>
            <p>Contact</p>
                  <p>Shipping</p>
                  <p>Return Policy</p>
                  <p>Customer Service</p>
                  <p>Gift Certificates</p>
                  <p>Discount Codes</p>
            </Box>
            
            </Grid>
           </Grid>
        
        <Typography style={{color:'tomato'}}>
        Copyright © 2021 || Abdu Naim
        </Typography>
      </Box>
        
    );
};

export default Footer;