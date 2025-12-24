import React from "react";
import cls from "./Footer.module.css";
import logo from "../../assets/vector2.png";
import visa from "../../assets/visa.png";

function Footer() {
  return (
    <footer className={cls.footer}>
      <div className={cls.container}>

        <div className={cls.column1}>
          <div className={cls.logo}>
            <img src={logo} alt="NORNLIGHT" />
            <span>NORNLIGHT</span>
          </div>

          <p className={cls.phone}>8 (800) 890-46-56</p>

          <div className={cls.payments}>
            <img src={visa} alt="" />
          </div>

          <div className={cls.policies}>
            <p>Политика конфиденциальности</p>
            <br />
            <p>Пользовательское соглашение</p>
          </div>

          <div className={cls.socials}>
            <span>VK</span>
            <span>VK</span>
            <span>VK</span>
          </div>
        </div>

        <div className={cls.column}>
          <h4>Покупателям</h4>
          <ul>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Гарантии</li>
            <li>Контакты</li>
            <li>Блог</li>
          </ul>
        </div>

        <div className={cls.column}>
          <h4>Товары</h4>
          <ul>
            <li>Люстры</li>
            <li>Светильники</li>
            <li>Бра</li>
            <li>Торшеры</li>
            <li>Комплектующие</li>
            <li>Настольные лампы</li>
          </ul>
        </div>

        <div className={cls.column}>
          <h4></h4>
          <ul>
            <li>Споты</li>
            <li>Трековые светильники</li>
            <li>Уличные светильники</li>
            <li>Технические светильники</li>
            <li>Светодиодные ленты</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
