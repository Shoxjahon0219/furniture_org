import React from "react";
import cls from "./Home.module.css";

import heroImg from "../../assets/hero.png";

import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";
import cat6 from "../../assets/cat6.png";

import product from "../../assets/product.png";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";

function Home () {
  return (
    <main className={cls.home}>
      <section className={cls.hero}>
        <div className={cls.heroContent}>
          <h1>
            Скидка 15% <br />
            на все подвесные <br />
            светильники
          </h1>
          <span className={cls.heroBadge}>до 5 февраля</span>
        </div>
        <img src={heroImg} alt="Hero" />
      </section>

      <section className={cls.section}>
        <div className={cls.sectionHeader}>
          <h2>Каталог</h2>
          <button>Весь каталог →</button>
        </div>

        <div className={cls.catalogGrid}>
          {[cat1, cat2, cat3, cat4, cat5, cat6].map((img, i) => (
            <div key={i} className={cls.catalogCard}>
              <img src={img} alt="" />
              <p>От 5 400 ₽</p>
            </div>
          ))}
        </div>
      </section>

      <section className={cls.section}>
        <div className={cls.sectionHeader}>
          <h2>Почему NORNLIGHT?</h2>
        </div>

        <div className={cls.whyGrid}>
          <div>Только проверенные бренды</div>
          <div>Самые низкие цены</div>
          <div>Быстрая доставка</div>
          <div>Большой ассортимент</div>
        </div>
      </section>

      <section className={cls.section}>
        <div className={cls.sectionHeader}>
          <h2>Популярные товары</h2>
          <button>Все товары →</button>
        </div>

        <div className={cls.productsGrid}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={cls.productCard}>
              <img src={product} alt="" />
              <p>Встраиваемый светильник Novotech</p>
              <strong>6 399 ₽</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={cls.section}>
        <h2>Только проверенные бренды</h2>
        <div className={cls.brands}>
          <img src={brand1} />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand1} />
        </div>
      </section>

      <section className={cls.section}>
        <div className={cls.sectionHeader}>
          <h2>Блог</h2>
          <button>Перейти в блог →</button>
        </div>

        <div className={cls.blogGrid}>
          {[blog1, blog2, blog3].map((img, i) => (
            <div key={i} className={cls.blogCard}>
              <img src={img} />
              <p>Как правильно осветить дом снаружи?</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
