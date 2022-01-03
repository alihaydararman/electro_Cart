import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ManageOrders from './Components/Dashboard/Admin/ManageOrders/ManageOrders';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='manageOrders' element={<ManageOrders />}></Route>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
