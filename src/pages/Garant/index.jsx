import React from "react";

import {
  ReturnWrapper,
  BreadcrumbLink,
  BreadcrumbSpan,
  ContentContainer,
  LeftColumn,
  RightColumn,
  ReturnSection,

  BulletList,
  BulletListItem,
} from "./Garant.styled.js";

function Garant(props) {
  return (
    <div>
      <ReturnWrapper>
        <BreadcrumbLink href="/">Главная {">"}</BreadcrumbLink>
        <BreadcrumbSpan> Гарантии</BreadcrumbSpan>

        <ContentContainer>
          <LeftColumn>
            <h1>Гарантии</h1>
          </LeftColumn>

          <RightColumn>
            <ReturnSection>
              <h2>Обмен и возврат по желанию покупателя</h2>
              <p>
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров. Если ваше изделие вышло из строя в течение
                гарантийного срока вы можете обратиться к нам и получить
                бесплатный ремонт. Для этого нужно:
              </p>

              <BulletList>
                <BulletListItem>
                  Предоставить чек, накладную или сообщить почту или номер
                  телефона, указанные при оформлении заказа.
                </BulletListItem>
                <BulletListItem>
                  Привезти товар к нам на склад или отправить его транспортной
                  компанией.
                </BulletListItem>
                <BulletListItem>
                  После товар отправляется на экспертизу и ремонт. Если ремонт
                  невозможен, мы обменяем изделие на аналогичное либо вернем
                  деньги за покупку
                </BulletListItem>

              </BulletList>
                <p>
                  Обращаем внимание, что «А-Свет» не является сервисным центром,
                  а выполняет роль посредника между клиентом и поставщиком.
                  Поэтому сроки проведения ремонта могут отличаться для товаров
                  различных брендов
                </p>
            </ReturnSection>
          </RightColumn>
        </ContentContainer>
      </ReturnWrapper>
    </div>
  );
}

export default Garant;
