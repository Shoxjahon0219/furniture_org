import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import { Home, About, Delivery } from "./pages";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Catalog/Basket";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/deliveryandpay" element={<Delivery />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
