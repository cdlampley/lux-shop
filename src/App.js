import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Bag from './components/Bag';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/bag" element={<Bag/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
