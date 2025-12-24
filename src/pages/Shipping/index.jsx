import React from "react";
import cls from "./Shipping.module.css";
import arrow from "../../assets/vector1.png";

function Shipping() {
  return (
    <section className={cls.shipping}>
      <p className={cls.breadcrumb}>
        <span>Главная</span>
        <img src={arrow} alt="" />
        <span>Доставка и оплата</span>
      </p>

      <div className={cls.wrapper}>
        <h1>Доставка и оплата</h1>

        <div className={cls.block}>
          <h3>Доставка</h3>
          <p>Доставка по Москве и регионам РФ. Сроки 4–6 недель.</p>
        </div>

        <div className={cls.block}>
          <h3>Курьерская доставка</h3>
          <p>Бесплатно от 5 000 ₽ в пределах МКАД.</p>
        </div>

        <div className={cls.block}>
          <h3>Самовывоз</h3>
          <p>Москва, Дмитровское шоссе 100с2</p>
        </div>
      </div>
    </section>
  );
}

export default Shipping;
