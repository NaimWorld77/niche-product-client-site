import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const SingleReview = ({review}) => {

    const { name,description, halfrating} = review;

    return (
        <Grid sx={{my:4,p:4}} item xs={12} sm={6} md={6}>
        <Card sx={{ minWidth: 275,height:300 }}>
        <CardContent>
        <Typography sx={{ fontSize: 30 }} color="" gutterBottom>
            {name}
        </Typography>
        <Typography variant="body2">
        {description}
        </Typography>
        <Typography variant="h5">
            Rating: {halfrating}<i style={{color:'tomato'}} className="fas fa-star"></i>
        </Typography>
    </CardContent>

    </Card>
    </Grid>
    );
};

export default SingleReview;