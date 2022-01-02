import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Name from './Components/Login/Name';

function App() {


  return (
    <div className="App">
          
           <AuthProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Name></Name>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
