import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollection = ({collection}) => {

    const {name,image,description,key} = collection;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275 ,height:650}}>
        <CardMedia
            style={{width:'auto',height:'250px', margin:'0 auto'}}
            component="img"
            image={image}
            alt="green iguana"
        />
  <CardContent>
    <Typography sx={{ fontSize: 30 }} color="" gutterBottom>
      {name}
    </Typography>
    <Typography variant="body2">
      {description}
    </Typography>
  </CardContent>
  <Link style={{textDecoration:'none',color:'white'}} to={`/product/${key}`}>
      <Button variant="contained" color="success" sx={{my:3}}>know more</Button>
      </Link>

</Card>
</Grid>
    );
};

export default SingleCollection;