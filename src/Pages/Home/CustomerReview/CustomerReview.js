import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReview = () => {

    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://shrouded-taiga-61011.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])

    return (
        <div>
            <h1 style={{color:'tomato'}} >Happy Customers Views</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            reviews.slice(0,2).map(review=><SingleReview
            key={review._id}
            review={review}
            ></SingleReview>)
        }
      </Grid>
    </Box>
        </div>
    );
};

export default CustomerReview;