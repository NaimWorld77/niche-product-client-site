import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import { Typography } from '@mui/material';
import BuyNow from '../../BuyNow/BuyNow';
import ProductDetails from '../ProductDetails/ProductDetails';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
      <>
      <Navigation></Navigation>
        <Box>
        <Typography sx={{my:8}} variant="h2">
            Our New Products
          </Typography>
        
        <Box sx={{ flexGrow: 1 ,my:8,bgcolor: 'text.disabled'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.slice(0,6).map(product=> <Product
                    key={product.key}
                    product={product}
                   ></Product>)
}
                
          
        </Grid>
      </Box>
      </Box>
      <Footer></Footer>

      </>

    );
};

export default Products;