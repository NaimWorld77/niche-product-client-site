import { Button, Grid, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
const AddAProduct = () => {

    // const {user} = useAuth();
    const history = useHistory();
        

        


    const initialInfo = {image:'',name:'',description:'',price:''}

    const [buyInfo,setBuyInfo] = useState(initialInfo);


    const handleonBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...buyInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setBuyInfo(newInfo);


    }
    const handleonChange =e=>{
        e.preventDefault();
        const productInfo ={
                ...buyInfo,
               
        }
        console.log(productInfo);

        alert('submitted successfully')
       

        //SEND TO THE SERVER 
        fetch('https://shrouded-taiga-61011.herokuapp.com/products',{

                method:'POST',
                headers:{
                        'content-type':'application/json'         
                },
                body:JSON.stringify(productInfo)
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
                <Box >
                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                           Add A Product     

                        </Typography>
                
                
                <form onSubmit={handleonChange}>
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="image"
                        type="url"
                        onBlur={handleonBlur}
                        defaultValue="image url"
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="name"
                        onBlur={handleonBlur}
                        defaultValue="name"
                        size="small"
                        />
                        <TextareaAutosize
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px',height:'50px'}}
                        name="description"
                        onBlur={handleonBlur}
                        defaultValue="Description"
                        aria-label="empty textarea"
                            
                            />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="price"
                        type="number"
                        onBlur={handleonBlur}
                        placeholder="price"
                        defaultValue="Price"
                        size="small"
                        />
                        <Button
                        type="submit"
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                         variant="contained">Add Product</Button>
                </form>
                
                </Grid>
                
                </Grid>

        </Box>
        </>
    );
};

export default AddAProduct;