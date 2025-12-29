import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const Page = styled.div`
  padding: 0 60px;
  font-family: Inter, sans-serif;

  b{
    color: #2f4da3;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  margin-top: 120px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 80px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.1;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Block = styled.div`
  max-width: 520px;
`;

export const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const BlockText = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

export const MapWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 670px;
  background: ${bgColors.lightBlue};
  border-radius: 8px;

  @media (max-width: 767px) {
    height: 260px;
  }
`;
