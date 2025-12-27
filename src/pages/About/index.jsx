import React from "react";
import cls from "./About.module.css";
import arrow from "../../assets/vector1.png";
import { Link } from "react-router-dom";
import Home from "../Home";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { Arrow } from "../../components/icons";

function About() {
  return (
    <section className={cls.about}>
      <p className={cls.breadcrumb}>
        <Link to={"/"}>Главная</Link>
        <img src={arrow} alt="" />
        <span>О компании</span>
      </p>

      <div className={cls.wrapper}>
        <div className={cls.left}>
          <h1>О компании</h1>

          <div className={cls.stats}>
            <div className={cls.card}>
              <p className={cls.big}>170+</p>
              <p className={cls.small}>Товаров</p>
            </div>
            <div className={cls.card}>
              <p className={cls.big}>1000+</p>
              <p className={cls.small}>Довольных клиентов</p>
            </div>
            <div className={cls.card}>
              <p className={cls.big}>10 лет</p>
              <p className={cls.small}>на рынке</p>
            </div>
          </div>
        </div>

        <div className={cls.right}>
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
            <br />
            <br />
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
            <br />
            <br />
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют. <br />
            <br />
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
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
    </section>
  );
}

export default About;
