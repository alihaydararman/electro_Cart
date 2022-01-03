import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';

import Home from './Components/Home/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ManageOrders from './Components/DashBoard/Admin/ManageOrders/ManageOrders';

import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from './Components/DashBoard/Dashboard/Dashboard';
import DashboardHome from './Components/DashBoard/DashboardHome/DashboardHome';
import MakeAdmin from './Components/DashBoard/Admin/MakeAdmin/MakeAdmin';
import AddProduct from './Components/DashBoard/AddProduct/AddProduct'
import MyOrders from './Components/DashBoard/User/MyOrders/MyOrders';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddReview from './Components/DashBoard/Dashboard/AddReview/AddReview';
import AdminRoute from './Components/Login/AdminRoute/AdminRoute';

import OfferProducts from './Components/OfferProduct/OfferProducts/OfferProducts';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      
        <Routes>
          <Route path='product/checkout' element={<Checkout />}></Route>
          <Route path='cart' element={<Cart />}></Route>
     
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='product/checkout' element={<Checkout />}></Route>
          {/* <Route path="/" element={<Name></Name>}/> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
              path='dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path={'/dashboard'} element={<DashboardHome />}></Route>
              <Route path='makeadmin' element={<AdminRoute> <MakeAdmin/> </AdminRoute>}></Route>
              <Route path='addproduct' element={<AdminRoute> <AddProduct/> </AdminRoute>}></Route>
              <Route path='manageorders' element={<AdminRoute> <ManageOrders/> </AdminRoute>}></Route>
              <Route path='myorders' element={<MyOrders/>}></Route>
              <Route path='addreview' element={<AddReview/>}></Route>
            </Route>
 
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/offerproducts' element={<OfferProducts />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
