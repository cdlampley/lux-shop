import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Bag from './components/Bag';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import { AppContext } from './lib/contextLib';


const App = () => {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/bag" element={<Bag />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
