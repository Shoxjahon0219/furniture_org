import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import v from "../../assets/vector2.png"
import v2 from "../../assets/vector3.png";
import v3 from "../../assets/vector4.png";
import v4 from "../../assets/vector5.png";
import v5 from "../../assets/vector6.png";
import cs from "./Navbar.module.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className={cs.navbar}>
      <div className={cs.wul}>
        <div className={cs.mobileMenuToggle}>
          <button
            className={cs.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`${cs.navUl} ${isMenuOpen ? cs.navUlOpen : ''}`}>
          <li>
            <Link to="/about"> О компании </Link>
          </li>
          <li>
            <Link to="/deliveryandpay"> Доставка и оплата </Link>
          </li>
          <li>
            <Link to="/">Возврат </Link>
          </li>
          <li>
            <Link to="/"> Гарантии </Link>
          </li>
          <li>
            <Link to="/"> Контакты </Link>
          </li>
          <li>
            <Link to="/">Блог </Link>
          </li>
        </ul>
        <div className={cs.ws}>
          <span className={cs.phoneNumber}>8 (800) 890-46-56</span>
          <span className={cs.callback}>Заказать звонок</span>
        </div>
      </div>

      <div className={cs.navp}>
        <div className={cs.navp1}>
          <img src={v} alt="" />
          <span>NORNLIGHT</span>
        </div>

        <div className={cs.navp2}>
          <button className={cs.catalogBtn}>
            <img src={v2} alt="" /> Каталог
          </button>

          <div className={`${cs.searchContainer} ${isSearchVisible ? cs.searchVisible : ''}`}>
            <input type="text" placeholder="Поиск по товарам" />
            <button
              className={cs.searchClose}
              onClick={() => setIsSearchVisible(false)}
            >
              ✕
            </button>
          </div>

          <button
            className={cs.searchToggle}
            onClick={() => setIsSearchVisible(true)}
          >
            🔍
          </button>

          <div className={cs.navIcons}>
            <div className={cs.navIcon}>
              <img src={v3} alt="Избранное" />
              <p>Избранное</p>
            </div>
            <div className={cs.navIcon}>
              <img src={v4} alt="Сравнение" />
              <p>Сравнение</p>
            </div>
            <div className={cs.navIcon}>
              <img src={v5} alt="Корзина" />
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;