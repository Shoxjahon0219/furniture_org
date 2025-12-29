import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const Page = styled.div`
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${textColors.primary};
`;

export const Breadcrumbs = styled.div`
  font-size: 14px;
  color: ${textColors.secondary};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 48px;
  }
`;
export const ImageWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Availability = styled.div`
  font-size: 14px;
  color: #2e7d32;
  margin-top: 4px;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;
export const Price = styled.div`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const OldPrice = styled.div`
  font-size: 16px;
  color: ${textColors.lightGray};
  text-decoration: line-through;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  max-width: 480px;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;
export const Counter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${textColors.lightGray};
  border-radius: 8px;
  overflow: hidden;

  button {
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: ${textColors.primary};
  }

  span {
    width: 40px;
    text-align: center;
    font-size: 14px;
  }
`;
export const AddToCart = styled.button`
  height: 36px;
  padding: 0 20px;
  background: ${bgColors.primary};
  color: ${textColors.white};
  border-radius: 8px;
  border: none;
  font-size: 14px;
`;

export const Favorite = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CharacteristicsSection = styled.section`
  margin-top: 100px;
`;

export const CharacteristicsTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const Table = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px 16px;
  background: ${(props) =>
    props.gray ? bgColors.lightBlue : textColors.white};
  font-size: 14px;
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.div`
  color: ${textColors.primary};
  font-weight: 500;
`;

export const Value = styled.div`
  color: ${textColors.secondary};
  text-align: right;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
