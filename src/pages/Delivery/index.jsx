import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/vector1.svg";

import {
  Page,
  Breadcrumbs,
  Content,
  Title,
  RightColumn,
  Block,
  BlockTitle,
  BlockText,
  MapWrapper,
} from "./Delivery.styled";

const DeliveryPayment = () => {
  return (
    <Page>
      <Breadcrumbs>
        <Link to="/">Главная</Link>
        <img src={arrow} alt="" />
        <span>Доставка и оплата</span>
      </Breadcrumbs>

      <Content>
        <Title>
          Доставка <br /> и оплата
        </Title>

        <RightColumn>
          <Block>
            <BlockTitle>Доставка</BlockTitle>
            <BlockText>
              Мы осуществляем доставку по Москве и Московской области
              собственными курьерами. Транспортными компаниями наши грузы
              доставляются по всей территории РФ, а также по всем странам СНГ.
              <b> Сроки доставки: 4–6 недель</b>
            </BlockText>
          </Block>

          <Block>
            <BlockTitle>Курьерская доставка</BlockTitle>
            <BlockText>
              БЕСПЛАТНО доставим в пределах МКАД любой заказ от
              <b> 5 000 ₽</b>.
              <br />
              Заказы свыше <b>30 000 ₽</b> имеют бесплатную доставку,
              включительно 15 км от МКАД.
            </BlockText>
          </Block>

          <Block>
            <BlockTitle>Самовывоз</BlockTitle>
            <BlockText>
              Любой заказ можно забрать самостоятельно по адресу:
              <br />
              г. Москва, Дмитровское шоссе д.100с2
            </BlockText>
          </Block>
        </RightColumn>
      </Content>

      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.8900924115183!2d37.5474397!3d55.8819211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5377b62a6c59f%3A0x21f12fc1ff139d04!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDEwMCwg0YEyLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjQ3!5e0!3m2!1sru!2s!4v1766938169665!5m2!1sru!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapWrapper>
    </Page>
  );
};

export default DeliveryPayment;
