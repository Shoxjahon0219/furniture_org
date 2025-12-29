import React from "react";
import {
  Breadcrumbs,
  ContactWrapper,
  ContentContainer,
  DeliverySection,
  FullWidthMap,
  LeftColumn,
  RightColumn,
} from "./Contact.styled";
import arrow from "../../assets/vector1.svg";
import { Link } from "react-router-dom";

function Contacts(props) {
  return (
    <div>
      <ContactWrapper>
        <Breadcrumbs>
          <Link to="/">Главная</Link>
          <img src={arrow} alt="" />
          <span>Контакты</span>
        </Breadcrumbs>

        <ContentContainer>
          <LeftColumn>
            <h1>Контакты</h1>
          </LeftColumn>

          <RightColumn>
            <DeliverySection>
              <h2>8 (800) 890-46-56</h2>
              <p>Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны: </p>
            </DeliverySection>
          </RightColumn>
        </ContentContainer>
      </ContactWrapper>

      <FullWidthMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35315.22839838126!2d37.62929865910878!3d55.76395029425493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1766925368101!5m2!1suz!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта доставки"
        />

        <div className="map-overlay">
          <div>
            <span>Адрес магазина</span>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>

          <div>
            <span>Почта</span>
            <p>NORNLIGHT@mail.ru</p>
          </div>

          <div>
            <span>Телефон</span>
            <p>8 (800) 890-46-56</p>
          </div>

          <button>Оставить заявку</button>
        </div>
      </FullWidthMap>
    </div>
  );
}

export default Contacts;
