import { Alert, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import img1 from '../../images/login banner1.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const [loginData,setLoginData] = useState({});

    const {loginUser,user,isLoading,authError} = useAuth();



    const handleOnBlur =e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleOnSubmit =e =>{

        loginUser(loginData.email,loginData.password)

        e.preventDefault()
    }


    return (
       
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%',marginLeft:'10px'}} src={img1} alt="" />
                </Grid>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                    <Typography variant="h3" gutterBottom>
                        login
                    </Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                    <TextField 
                    style={{width:'70%',margin:'20px'}}
                    id="standard-basic" 
                    label="Your email" 
                    onBlur={handleOnBlur}
                    name="email"
                    variant="standard"/>

                    <TextField 
                    style={{width:'70%',margin:'20px'}}
                    id="standard-basic" 
                    label="Password" 
                    onBlur={handleOnBlur}
                    name="password"
                    type="password"
                    variant="standard"/>
                    <Button  style={{width:'70%',margin:'20px'}} type='submit' variant="contained">Login</Button>
                    <NavLink style={{textDecoration:'none'}} to="/register">
                    <Button variant="text">New user?Click for Register.</Button>
                    </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress/>

                    }
                    {
                        user?.email && <Alert severity="success">Login Successfully Done</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>

                    }
                </Grid>
            </Grid>
            </Box>
        
    );
};

export default Login;