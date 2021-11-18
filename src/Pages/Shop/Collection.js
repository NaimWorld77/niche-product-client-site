import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import SingleCollection from './SingleCollection/SingleCollection';

const Collection = () => {

    const [collections,setCollections] = useState([]);

    useEffect(()=>{
        fetch('https://shrouded-taiga-61011.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setCollections(data))
    },[])

    return (
    
      <>
      <Navigation></Navigation>
      <Box>
        <Typography sx={{my:8}} variant="h2">
            Our Brand New Collection
          </Typography>

        <Box style={{padding:'20px'}} sx={{ flexGrow: 1 ,my:8,bgcolor: 'text.disabled'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
                {
                  collections.map(collection =><SingleCollection
                  key={collection._id}
                  collection={collection}
                  ></SingleCollection>)
                    
                }
          
        </Grid>
      </Box>
      </Box>
      <Footer></Footer>

      </>
      
      
    );
};

export default Collection;