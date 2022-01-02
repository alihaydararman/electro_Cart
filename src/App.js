import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import OfferProducts from './Components/OfferProduct/OfferProducts/OfferProducts';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/offerproducts" element={<OfferProducts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
