import React from "react";
import arrow from "../../assets/vector1.png";
import { Link } from "react-router-dom";
import Home from "../Home";
import { AllProductsWrapper } from "./AlllProducts.styled";

function AllProducts() {
  return (
    <AllProductsWrapper className={"about"}>
      <p className={"breadcrumb"}>
        <Link to={"/"}>Главная</Link>
      </p>
    </AllProductsWrapper>
  );
}

export default AllProducts;
