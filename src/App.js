import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import Contact from './Component/Category';
import Products from './Component/products';
import Createproduct from './Component/createproduct';
import Somethinkelsehere from './Component/somethinkelsehere';
import Pagenotfound from './Component/pagenotfound';
import Login from './Component/Login';
import Signup from './Component/signup';
import Signout from './Component/signout';
import Productoperation from './Component/Productoperation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="/Footer" exact element={<Footer />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/createproduct" exact element={<Createproduct />} />
        <Route path="/somethinkelsehere" exact element={<Somethinkelsehere />} />
        <Route path="/pagenotfound " exact element={<Pagenotfound  />} />
        <Route path="/login" exact element={<Login  />} />
        <Route path="/signup" exact element={<Signup  />} />
        <Route path="/signout" exact element={<Signout  />} />
        <Route path="/productoperation " exact element={<Productoperation  />} />

      </Routes>
    </>
  )
}

export default App;