import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='productsdetails' element={<ProductDetails />} />
        <Route path='product/checkout' element={<Checkout />}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
