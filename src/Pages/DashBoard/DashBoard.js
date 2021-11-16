import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrder from '../DashboardPannel/MyOrder/MyOrder';
import Payment from '../DashboardPannel/Payment/Payment';
import Review from '../DashboardPannel/Review/Review';
import ManageOrder from '../DashboardPannel/ManageOrder/ManageOrder';
import AddAProduct from '../DashboardPannel/AddAProduct/AddAProduct';
import MakeAdmin from '../DashboardPannel/MakeAdmin/MakeAdmin';

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box style={{textAlign:'justify'}}>
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}`}>
      <Button color="inherit">My Orders</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}/payment`}>
      <Button color="inherit">Payment</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}/review`}>
      <Button color="inherit">Review</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}/manageorders`}>
      <Button color="inherit">Manage All Orders</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}/addaproduct`}>
      <Button color="inherit">Add a product</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'tomato'}} to={`${url}/makeadmin`}>
      <Button color="inherit">Make Admin</Button>
      </Link>
      <br />
      <Link style={{textDecoration:'none',color:'white'}} to="/home">
      <Button>Back to Home</Button>
      </Link>
      </Box>
      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />

        <Switch>
        <Route exact path={path}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
          </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
          </Route>
        <Route path={`${path}/manageorders`}>
          <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/addaproduct`}>
            <AddAProduct></AddAProduct>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
        
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  
  window: PropTypes.func,
};

export default DashBoard;
