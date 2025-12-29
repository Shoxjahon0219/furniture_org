import React from "react";
import { Wrapper, Content, Code, Text, HomeButton } from "./NotFound.styled";

function NotFound() {
  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Text>Похоже, ничего не нашлось :(</Text>
        <HomeButton to="/">На главную</HomeButton>
      </Content>
    </Wrapper>
  );
}

export default NotFound;
