import styled from "styled-components";
import { textColors } from "../../theme";

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
export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* margin: 40px 200px; */
  padding: 40px 0;

  .BreadCrumb {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 1024px) {
    margin: 40px 100px;
    padding: 30px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 30px 50px;
    padding: 25px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 25px 20px;
    padding: 20px 0;
  }

  @media screen and (max-width: 375px) {
    margin: 20px 15px;
  }
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: rgba(69, 69, 69, 1);
  opacity: 40%;
  font-size: 14px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const BreadcrumbSpan = styled.span`
  color: rgba(69, 69, 69, 1);
  font-size: 14px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }
`;

export const BlogTitle = styled.h1`
  color: rgba(69, 69, 69, 1);
  font-size: 40px;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    font-size: 24px;
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
