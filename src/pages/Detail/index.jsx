import React, { useState } from "react";
import {
  Actions,
  AddToCart,
  Availability,
  Breadcrumbs,
  CharacteristicsSection,
  CharacteristicsTitle,
  Counter,
  Description,
  ImageWrapper,
  Info,
  Label,
  Meta,
  OldPrice,
  Page,
  Price,
  PriceBlock,
  Row,
  Table,
  Title,
  TopSection,
  Value,
} from "./Detail.styled";
import arrow from "../../assets/vector1.svg";

import chandelier from "./../../assets/chandelier2.png";
import { Link } from "react-router-dom";

export default function Detail() {
  const [count, setCount] = useState(1);

  const decrement = () => setCount((c) => (c > 1 ? c - 1 : 1));
  const increment = () => setCount((c) => c + 1);

  return (
    <Page>
      <Breadcrumbs>
        <Link to={"/"}>Главная</Link>
        <img src={arrow} alt="" />
      </Breadcrumbs>

      <TopSection>
        <ImageWrapper>
          <img src={chandelier} alt="Встраиваемый светильник Novotech" />
        </ImageWrapper>

        <Info>
          <Title>Встраиваемый светильник Novotech</Title>

          <Meta>
            Scott
            <br />
            Артикул: 7655-188
          </Meta>

          <Availability>В наличии</Availability>

          <PriceBlock>
            <Price>435 000 ₽</Price>
            <OldPrice>522 000 ₽</OldPrice>
          </PriceBlock>

          <Description>
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных
            хардтейлов для кросс-кантри.
          </Description>

          <Actions>
            <Counter>
              <button onClick={decrement}>−</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </Counter>

            <Link to={"/basket"}>
              <AddToCart>В корзину</AddToCart>
            </Link>
          </Actions>
        </Info>
      </TopSection>

      <CharacteristicsSection>
        <CharacteristicsTitle>Характеристика</CharacteristicsTitle>

        <Table>
          <Row gray>
            <Label>Цвет</Label>
            <Value>Жёлтый</Value>
          </Row>
          <Row>
            <Label>Год</Label>
            <Value>2016</Value>
          </Row>
          <Row gray>
            <Label>Диаметр колеса</Label>
            <Value>27.5</Value>
          </Row>
          <Row>
            <Label>Материал рамы</Label>
            <Value>Карбон</Value>
          </Row>
          <Row gray>
            <Label>Размер</Label>
            <Value>L</Value>
          </Row>
          <Row>
            <Label>Страна</Label>
            <Value>Швейцария</Value>
          </Row>
          <Row gray>
            <Label>Производитель</Label>
            <Value>Scott</Value>
          </Row>
          <Row>
            <Label>Покрышки</Label>
            <Value>
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </Value>
          </Row>
          <Row gray>
            <Label>Рама</Label>
            <Value>
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </Value>
          </Row>
          <Row>
            <Label>Подседельный штырь</Label>
            <Value>
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </Value>
          </Row>
          <Row gray>
            <Label>Седло</Label>
            <Value>Ritchey WCS Streem V3 Titanium rails</Value>
          </Row>
          <Row>
            <Label>Вилка</Label>
            <Value>
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </Value>
          </Row>
        </Table>
      </CharacteristicsSection>
    </Page>
  );
}
