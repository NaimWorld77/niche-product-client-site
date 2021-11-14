import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleCollection from './SingleCollection/SingleCollection';

const Collection = () => {

    const [collections,setCollections] = useState([]);

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>setCollections(data))
    },[])
    console.log(collections);

    return (
      <Box>
        <Typography sx={{my:8}} variant="h2">
            Our Brand New Collection
          </Typography>

        <Box sx={{ flexGrow: 1 ,my:8,bgcolor: 'text.disabled'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
                {
                  collections.map(collection =><SingleCollection
                  key={collection.key}
                  collection={collection}
                  ></SingleCollection>)
                    
                }
          
        </Grid>
      </Box>
      </Box>
      
    );
};

export default Collection;