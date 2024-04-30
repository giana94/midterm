import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Navbar from './components/NavBar.jsx';


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} /> 
          <Route path="*" element={<div>Route Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
