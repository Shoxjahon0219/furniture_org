import React from "react";
import { CatalogWrapper } from "./Catalog.styled";
import { Link } from "react-router-dom";
import arrow from "../../assets/vector1.svg";

import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";
import cat6 from "../../assets/cat6.png";
import cat7 from "../../assets/cat7.png";
import cat8 from "../../assets/cat8.png";
import cat9 from "../../assets/cat9.png";
import cat10 from "../../assets/cat10.png";
import cat11 from "../../assets/cat11.png";

import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { Arrow } from "../../components/icons";

function Catalog(props) {
  return (
    <CatalogWrapper>
      <p className={"breadcrumb"}>
        <Link to={"/"}>Главная</Link>
        <img src={arrow} alt="" />
        <span>Каталог</span>
      </p>
      <h1 className="title">Каталог</h1>
      <div className="catalogGrid">
        {[
          { img: cat1, text: "Люстры" },
          { img: cat2, text: "Светильники" },
          { img: cat3, text: "Бра" },
          { img: cat4, text: "Торшеры" },
          { img: cat5, text: "Настольные лампы" },
          { img: cat6, text: "Споты" },
          { img: cat7, text: "Трековые светильники" },
          { img: cat8, text: "Уличные светильники" },
          { img: cat9, text: "Технические светильники" },
        ].map((prd, i) => (
          <div key={i} className="catalogCard">
            <div>
              <p className="catalogText">{prd.text}</p>
              <p>От 540 ₽ →</p>
            </div>
            <img src={prd.img} alt="" />
          </div>
        ))}
      </div>
      <div className="catalogGrid2">
        {[
          { img: cat10, text: "Светодиодные ленты" },
          { img: cat11, text: "Комплектующие" },
        ].map((prd, i) => (
          <div key={i} className="catalogCard">
            <div>
              <p className="catalogText">{prd.text}</p>
              <p>От 540 ₽ →</p>
            </div>
            <img src={prd.img} alt="" />
          </div>
        ))}
      </div>
      <h2 className="brandText">Только проверенные бренды</h2>
      <div className={"brands"}>
        <img src={brand1} />
        <img src={brand2} />
        <img src={brand3} />
        <img src={brand1} />
      </div>
      <section className={"section"}>
        <div className={"sectionHeader"}>
          <h2>Блог</h2>
          <button>
            <Link to={"/blog"} className="link">
              Перейти в блог →
            </Link>
          </button>
        </div>

        <div className={"blogGrid"}>
          {[blog1, blog2, blog3].map((img, i) => (
            <div key={i} className={"blogCard"}>
              <img src={img} />
              <div className={"blogWord"}>
                <p>Как правильно осветить дом снаружи?</p>
                <Arrow />
              </div>
              <p className={"blogDate"}>01.01.2024</p>
            </div>
          ))}
        </div>
      </section>
    </CatalogWrapper>
  );
}

export default Catalog;
