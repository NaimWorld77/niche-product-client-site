import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProductDetails = () => {

    const {productKey} = useParams();
    const [details,setDetails] = useState([]);

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    const showDetails = details.find(detail=>detail.key == productKey);
    console.log(showDetails);

    return (
        <Card style={{Width: '100%', padding:'20px' }}>
      <CardMedia
        component="img"
        style={{width:'auto',margin:'0 auto'}}
        image={showDetails?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {showDetails?.name}
        </Typography>
        <Typography gutterBottom variant="h2" component="div">
          {showDetails?.price}$
        </Typography>
        <Typography variant="body2" color="">
         {showDetails?.description}
        </Typography>
      </CardContent>
      <Link style={{textDecoration:'none',color:'white'}} to="/Products">
          <Button variant="contained">buy now</Button>
          </Link>
          <br />
          <br />
      <Link style={{textDecoration:'none',color:'white'}} to="/home">
          <Button variant="contained">go previous</Button>
          </Link>
      
    </Card>
    );
};

export default ProductDetails;