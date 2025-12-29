import React, { useState } from "react";
import {
  Page,
  TitleWrapper,
  Badge,
  Grid,
  Card,
  ImageWrapper,
  Name,
  Bottom,
  Prices,
  OldPrice,
  Price,
  CartButton,
} from "./Favorites.styled";

import chandelier from "../../assets/chandelier2.png";
import { CartIcon } from "../../components";

export default function Favorites() {
  const products = [
    {
      id: 1,
      title: "Встраиваемый светильник Novotech",
      image: chandelier,
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
    },
    {
      id: 2,
      title: "Встраиваемый светильник Novotech",
      image: chandelier,
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
    },
    {
      id: 3,
      title: "Встраиваемый светильник Novotech",
      image: chandelier,
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
    },
    {
      id: 4,
      title: "Встраиваемый светильник Novotech",
      image: chandelier,
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
    },
  ];
  const [count] = useState(products.length);

  return (
    <Page>
      <TitleWrapper>
        <h1>Избранные товары</h1>
        <Badge>{count}</Badge>
      </TitleWrapper>

      <Grid>
        {products.map((item) => (
          <Card key={item.id}>
            <ImageWrapper>
              <img src={item.image} alt={item.title} />
            </ImageWrapper>

            <Name>{item.title}</Name>

            <Bottom>
              <Prices>
                <OldPrice>{item.oldPrice}</OldPrice>
                <Price>{item.price}</Price>
              </Prices>

              <CartButton>
                <CartIcon color="white" width="16" height="16" />
              </CartButton>
            </Bottom>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}
