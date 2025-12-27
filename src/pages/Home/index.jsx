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
import { Arrow, PochNorIcon1 } from "../../components/icons";
import { Link } from "react-router-dom";

function Home() {
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
          <Link to={"catalog"}>
            <button className={cls.sectionHeaderButton}>
              <span>Весь каталог&ensp;&ensp;&ensp;→</span>
            </button>
          </Link>
        </div>

        <div className={cls.catalogGrid}>
          {[
            { img: cat1, text: "Люстры" },
            { img: cat2, text: "Светильники" },
            { img: cat3, text: "Бра" },
            { img: cat4, text: "Торшеры" },
            { img: cat5, text: "Настольные лампы" },
            { img: cat6, text: "Споты" },
          ].map((prd, i) => (
            <div key={i} className={cls.catalogCard}>
              <div>
                <p className={cls.catalogText}>{prd.text}</p>
                <p>От 540 ₽ →</p>
              </div>

              <img src={prd.img} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className={cls.section}>
        <header className={cls.sectionHeader}>
          <h2>Почему NORNLIGHT?</h2>
        </header>

        <div className={cls.whyGrid}>
          <article className={cls.whyCard}>
            <div className={cls.icon}>
              <PochNorIcon1 />
            </div>
            <h3>Только проверенные бренды</h3>
            <p>Бренды, проверенные временем и качеством.</p>
          </article>

          <article className={cls.whyCard}>
            <div className={cls.icon}>
              <PochNorIcon1 />
            </div>
            <h3>Самые низкие цены</h3>
            <p>Ниже не будет нигде.</p>
          </article>

          <article className={cls.whyCard}>
            <div className={cls.icon}>
              <PochNorIcon1 />
            </div>
            <h3>Быстрая доставка</h3>
            <p>Доставляем по всей РФ за 1–10 дней.</p>
          </article>

          <article className={cls.whyCard}>
            <div className={cls.icon}>
              <PochNorIcon1 />
            </div>
            <h3>Большой ассортимент</h3>
            <p>Более 1000 товаров.</p>
          </article>
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
              <div className={cls.blogWord}>
                <p>Как правильно осветить дом снаружи?</p>
                <Arrow />
              </div>
              <p className={cls.blogDate}>01.01.2024</p>
            </div>
          ))}
        </div>
      </section>

      <section className={cls.section}>
        <div className={cls.productionWrapper}>
          <div className={cls.productionLeft}>
            <h2>Производство светильников</h2>
          </div>
          <div className={cls.productionRight}>
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надёжные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют.
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
