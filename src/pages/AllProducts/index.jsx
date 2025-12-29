import React from "react";
import arrow from "../../assets/vector1.svg";
import { Link } from "react-router-dom";
import Home from "../Home";
import { AllProductsWrapper } from "./AlllProducts.styled";
import product from "../../assets/product.png";

function AllProducts() {
  return (
    <AllProductsWrapper className={"about"}>
      <p className={"breadcrumb"}>
        <Link to={"/"}>Главная</Link>
      </p>

      <section className={"section"}>
        <div className={"sectionHeader"}>
          <h2>Популярные товары</h2>
        </div>

        <div className={"productsGrid"}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={"productCard"}>
              <Link to={`/detail/${i}`}>
                <img src={product} alt="" />
                <div className={"price"}>
                  <p>Встраиваемый светильник Novotech</p>
                  <del className={"delPrice"}>7 000₽</del>
                  <strong>6 399 ₽</strong>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </AllProductsWrapper>
  );
}

export default AllProducts;
