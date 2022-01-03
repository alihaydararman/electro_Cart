import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Name from './Components/Login/Name';
import Dashboard from './Components/DashBoard/Dashboard';
import DashboardHome from './Components/DashBoard/DashboardHome/DashboardHome';
import MakeAdmin from './Components/DashBoard/Admin/MakeAdmin/MakeAdmin';
import AddProduct from './Components/DashBoard/AddProduct/AddProduct'
import ManageOrder from './Components/DashBoard/Admin/ManageOrders/ManageOrder';
import MyOrders from './Components/DashBoard/User/MyOrders/MyOrders';
import ManageOrders from './Components/DashBoard/Admin/ManageOrders/ManageOrders';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddReview from './Components/DashBoard/Dashboard/AddReview/AddReview';

function App() {


  return (
    <div className="App">
          
           <AuthProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Name></Name>}/>
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
              <Route path='makeadmin' element={<MakeAdmin />}></Route>
              <Route path='addproduct' element={<AddProduct />}></Route>
              <Route path='manageorders' element={<ManageOrders/>}></Route>
              <Route path='myorders' element={<MyOrders/>}></Route>
              <Route path='addreview' element={<AddReview/>}></Route>
            </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
