import styled from "styled-components";
import { textColors, bgColors } from "../../theme";

export const AboutSection = styled.section`
  margin-top: 60px;
  font-family: Inter, sans-serif;
`;

/* Breadcrumb */

export const Breadcrumb = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 12px;
  }
`;

/* Wrapper */

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;

  h1 {
    font-size: 56px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.div`
  background: ${bgColors.lightBlue};
  border-radius: 16px;
  padding: 32px;
`;

export const Big = styled.p`
  font-size: 48px;
  font-weight: 700;
`;

export const Small = styled.p`
  font-size: 18px;
`;

export const Right = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 1.6;
  color: ${textColors.primary};
`;

/* Sections */

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 72px;
`;

export const Brands = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 105px;

  img {
    max-width: 160px;
    width: 100%;
    object-fit: contain;
  }
`;

/* Blog */

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 40px;
    font-weight: 700;
  }

  button {
    background: transparent;
    border: 1px solid ${textColors.primary};
    padding: 14px 48px;
    border-radius: 100px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: ${textColors.primary};
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  img {
    width: 100%;
    border-radius: 16px;
    padding-bottom: 29px;
  }
`;

export const BlogWord = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 24px;
`;

export const BlogDate = styled.p`
  font-size: 14px;
  color: ${textColors.secondary};
`;
