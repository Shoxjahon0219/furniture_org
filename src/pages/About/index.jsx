import React from "react";
import cls from "./About.module.css";
import arrow from "../../assets/vector1.png";

function About() {
  return (
    <section className={cls.about}>
      <p className={cls.breadcrumb}>
        <span>Главная</span>
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
            светильников для дома и офиса. Мы работаем по всей России и
            гарантируем качество продукции и сервиса.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
