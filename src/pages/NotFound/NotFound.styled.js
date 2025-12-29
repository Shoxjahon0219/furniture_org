import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

export const Code = styled.div`
  font-size: 260px;
  font-weight: 700;
  color: #eeeeee;
  line-height: 1;
  user-select: none;

  @media (max-width: 767px) {
    font-size: 160px;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  font-size: 20px;
  color: #454545;

  @media (max-width: 767px) {
    margin-top: 32px;
    font-size: 18px;
  }
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  margin-top: 32px;
  padding: 14px 48px;
  background: #454545;
  color: #ffffff;
  border-radius: 100px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 0;
  }
`;
