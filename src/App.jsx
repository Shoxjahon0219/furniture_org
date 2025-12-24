import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import { Home, Shipping, About } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/deliveryandpay" element={<Shipping />} />
      </Route>
    </Routes>
  );
}

export default App;
