import styled from "styled-components";

export const Page = styled.div`
  padding: 40px 0;
  font-family: Inter, system-ui, sans-serif;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    color: #454545;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -18px;
  background: #e53935;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 160px;
    height: auto;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  color: #454545;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OldPrice = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  text-decoration: line-through;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #454545;
`;

export const CartButton = styled.button`
  width: 55px;
  height: 33px;
  border-radius: 100px;
  background: #454545;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
