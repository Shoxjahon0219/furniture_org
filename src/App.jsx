import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import { Home, About, Delivery } from "./pages";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Catalog/Basket";
import AllProducts from "./pages/AllProducts";
import Detail from "./pages/Detail";
import Return from "./pages/Return";
import Garant from "./pages/Garant";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

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
        <Route path="/garant" element={<Garant />} />
        <Route path="/return" element={<Return />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
