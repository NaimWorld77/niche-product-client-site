import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/slideshow_1.jpg';
import img2 from '../../../images/slideshow_2.jpg';

const Banner = () => {
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <img style={{width:'100%',height:'510px'}} src={img1} alt="" />
                </Grid>
                <Grid item sm={12} md={6}>
                    <img style={{width:'100%',height:'510px'}} src={img2} alt="" />
                </Grid>
            </Grid>
        </Box>
            
        
    );
};

export default Banner;