import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import img1 from '../images/bgg.jpg';
import Navigation from '../Pages/Shared/Navigation/Navigation';

const BuyNow = () => {

    const {user} = useAuth();
        const {id}=useParams();
        const [details,setDetails] = useState([]);
const history=useHistory();
        useEffect(()=>{
                fetch('http://localhost:5000/products')
                .then(res=>res.json())
                .then(data=>setDetails(data))
            },[])
        
            const showDetails = details.find(detail=>detail.key === parseInt(id));

        //     console.log(showDetails?.name);
        //     console.log(showDetails?.price);


   const initialInfo = {customarName:user?.displayName,email:user?.email,productPrice:showDetails?.price,productName:showDetails?.name,phone:'',address:''}  

    const [buyInfo,setBuyInfo] = useState(initialInfo);


    const handleonBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...buyInfo};
        newInfo[field] = value;
        setBuyInfo(newInfo);


    }
    const handleonChange =e=>{
        e.preventDefault();
        const buyerInfo ={
                ...buyInfo,
                productPrice:showDetails?.price,productName:showDetails?.name
        }

        alert('submitted successfully')
       

        //SEND TO THE SERVER 
        fetch('http://localhost:5000/buyerinfo',{

                method:'POST',
                headers:{
                        'content-type':'application/json'         
                },
                body:JSON.stringify(buyerInfo)
        })
        .then(res=>res.json())
        .then(data=>{
                // console.log(data);
        })
e.target.reset();
history.push('/')
}






    const bgBuy = {
       background:`url(${img1})`,
       with:"50%"
    }

    return (
            <>
            <Navigation></Navigation>
                <Box  style={bgBuy}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                           FILL THIS FORM     

                        </Typography>
                
                
                <form onSubmit={handleonChange}>
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="customarName"
                        onBlur={handleonBlur}
                        defaultValue={user?.displayName||""}
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleonBlur}
                        defaultValue={user?.email||""}
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleonBlur}
                        defaultValue="phone number"
                        size="small"
                        />
                <TextField
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="address"
                        onBlur={handleonBlur}
                        defaultValue="address"
                        size="small"
                        />
                <TextField
                        disabled
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="productName"
                        onBlur={handleonBlur}
                       value={showDetails?.name||""}
                        size="small"
                        />
                <TextField
                        disabled        
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                        id="outlined-size-small"
                        name="productPrice"
                        onBlur={handleonBlur}
                        value={showDetails?.price||""}
                        size="small"
                        />
                        
                        <Button
                        type="submit"
                       
                        style={{width:'60%',marginTop:'20px',marginBottom:'20px'}}
                         variant="contained">Place Order</Button>
                </form>
                
                </Grid>
                
                </Grid>

        </Box>
        </>
    );
};

export default BuyNow;