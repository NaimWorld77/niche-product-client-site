import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

    const {user,logOut} = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Luxary Gold
          </Typography>
          <Link style={{textDecoration:'none',color:'white'}} to="/home">
          <Button color="inherit">Home</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}}  to="/products">
          <Button color="inherit">Products</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/collection">
          <Button color="inherit">Collection</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/customerservice">
          <Button color="inherit">Customer Service</Button>
          </Link>
          <Typography variant="h5">{user?.name}</Typography>
          { 
          user?.email ?
          
          <Box>

            <Link style={{textDecoration:'none',color:'white'}} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
            </Link>

            <Button onClick={logOut} style={{color:'tomato'}} color="">LogOut</Button>
          </Box>
            
            :
            <Link style={{textDecoration:'none',color:'white'}} to="/login">
          <Button color="inherit">Login</Button>
          </Link>}
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;