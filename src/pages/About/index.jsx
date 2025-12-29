import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/vector1.svg";

import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

import { Arrow } from "../../components/icons";

import {
  AboutSection,
  Breadcrumb,
  Wrapper,
  Left,
  Stats,
  Card,
  Big,
  Small,
  Right,
  Section,
  Brands,
  BlogGrid,
  BlogCard,
  BlogWord,
  BlogDate,
  SectionHeader,
} from "./About.styled";

function About() {
  return (
    <AboutSection>
      <Breadcrumb>
        <Link to="/">Главная</Link>
        <img src={arrow} alt="" />
        <span>О компании</span>
      </Breadcrumb>

      <Wrapper>
        <Left>
          <h1>О компании</h1>

          <Stats>
            <Card>
              <Big>170+</Big>
              <Small>Товаров</Small>
            </Card>
            <Card>
              <Big>1000+</Big>
              <Small>Довольных клиентов</Small>
            </Card>
            <Card>
              <Big>10 лет</Big>
              <Small>на рынке</Small>
            </Card>
          </Stats>
        </Left>

        <Right>
          <p>
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
            дом в оазис тепла и света с NORNLIGHT! <br />
            <br />
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
          </p>
        </Right>
      </Wrapper>

      <Section>
        <h2>Только проверенные бренды</h2>
        <Brands>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand1} alt="" />
        </Brands>
      </Section>

      <Section>
        <SectionHeader>
          <h2>Блог</h2>
          <button>
            <Link to={"/blog"} className="link">
              Перейти в блог →
            </Link>
          </button>
        </SectionHeader>

        <BlogGrid>
          {[blog1, blog2, blog3].map((img, i) => (
            <BlogCard key={i}>
              <img src={img} alt="" />
              <BlogWord>
                <p>Как правильно осветить дом снаружи?</p>
                <Arrow />
              </BlogWord>
              <BlogDate>01.01.2024</BlogDate>
            </BlogCard>
          ))}
        </BlogGrid>
      </Section>
    </AboutSection>
  );
}

export default About;
