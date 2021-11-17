import { Button, Grid, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory} from 'react-router';
import Rating from '@mui/material/Rating';

const Review = () => {


    const history = useHistory();
        

        


    const initialInfo = {name:'',description:'',halfrating:''}

    const [reviewInfo,setReviewInfo] = useState(initialInfo);


    const handleonBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...reviewInfo};
        newInfo[field] = value;
        setReviewInfo(newInfo);


    }
    const handleonChange =e=>{
        e.preventDefault();
        const review ={
                ...reviewInfo,
               
               
        }
        console.log(review);

        alert('submitted successfully')
       

        //SEND TO THE SERVER 
        fetch('http://localhost:5000/reviews',{

                method:'POST',
                headers:{
                        'content-type':'application/json'         
                },
                body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
                // console.log(data);
        })
e.target.reset();
history.push('/')
 }

    return (
        <>
                <Box>
                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                           Add A Review     

                        </Typography>
                
                
                <form onSubmit={handleonChange}>
                
                <TextField
                        style={{width:'30%',marginTop:'20px',marginBottom:'20px',margin:"20px"}}
                        id="outlined-size-small"
                        name="name"
                        onBlur={handleonBlur}
                        defaultValue="your name"
                        size="small"
                        />
                        
                        <TextareaAutosize
                        style={{width:'30%',marginTop:'20px',marginBottom:'20px',height:'80px'}}
                        name="description"
                        onBlur={handleonBlur}
                        defaultValue="write something about us"
                        aria-label="empty textarea"
                            />
                            <br />
                             <Rating 
                             onBlur={handleonBlur}
                             name="halfrating" 
                             defaultValue={2.5} 
                             precision={0.5} 
                             />
                             <br />

                        <Button
                        type="submit"
                        style={{width:'20%',marginTop:'20px',marginBottom:'20px'}}
                         variant="contained">Add Your Review</Button>
                </form>
                
                </Grid>
                
                </Grid>

        </Box>
        </>
    );
};

export default Review;