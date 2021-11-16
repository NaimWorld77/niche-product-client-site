import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  console.log(product);

    const {name,image,description,_id} = product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275,height:650 }}>
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
      <Link style={{textDecoration:'none',color:'white'}} to={`/product/${_id}`}>
      <Button variant="contained" color="success" sx={{my:3}}>know more</Button>
      </Link>

    </Card>
</Grid>
    );
};

export default Product;