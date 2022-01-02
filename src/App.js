import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='productsdetails' element={<ProductDetails />} />
        <Route path='product/checkout' element={<Checkout/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
