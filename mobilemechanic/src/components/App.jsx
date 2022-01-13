import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import ShoppingCart from './ShoppingCart/ShoppingCart';
// import TitleBar from './TitleBar/TitleBar';





function App() {

  const Login = async() => { 
      const response = await axios.post("https://localhost:44394/api/authentication");
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location.reload();
      }
}


    return (
      <div className="App">
        {/* <TitleBar /> */}
        <Routes>
          <Route path="/" exact element={<Create/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/newuser" element={<Login />} />
          <Route path="/shoppingcart" element={<ShoppingCart/>} />
        </Routes>
        <h1>Hello</h1>
      </div>
    );
  }
  
  export default App;

