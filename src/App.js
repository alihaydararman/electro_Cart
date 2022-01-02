import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
