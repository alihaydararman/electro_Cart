import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='productsdetails' element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
