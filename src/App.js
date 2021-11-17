import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import BuyNow from './BuyNow/BuyNow';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard';
import CustomerService from './Pages/Home/CustomerService/CustomerService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import Collection from './Pages/Shop/Collection';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/collection">
            <Collection></Collection>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/customerservice">
            <CustomerService></CustomerService>
          </Route>
          <PrivateRoute path="/buynow/:id">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <Route path="/register">
          <Register></Register>
          </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
