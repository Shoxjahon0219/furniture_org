import styled from "styled-components";

export const CatalogWrapper = styled.div`
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 35px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 30px;
      gap: 10px;
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 25px;
      gap: 8px;
    }

    .breadcrumb-header {
      display: flex;
      gap: 10px;

      @media screen and (max-width: 480px) {
        gap: 8px;
      }
    }
  }

  .title {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      font-size: 34px;
    }

    @media screen and (max-width: 480px) {
      font-size: 26px;
    }
  }

  .a {
    color: inherit;
    text-decoration: none;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  .catalogGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    @media screen and (max-width: 480px) {
      gap: 12px;
    }
  }

  .catalogGrid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 15px;
      padding-top: 15px;
    }

    @media screen and (max-width: 480px) {
      gap: 12px;
      padding-top: 12px;
    }
  }
  .catalogGrid2 > div {
    width: 640px;
    @media screen and (max-width: 768px) {
      width: 420px;
    }

    @media screen and (max-width: 480px) {
      width: 300px;
    }
  }

  .catalogCard {
    width: 420px;
    height: 250px;
    background: #f5f5f5;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1024px) {
      height: 420px;
      border-radius: 16px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
      border-radius: 14px;
      justify-content: space-between;
      padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
      height: 160px;
      border-radius: 12px;
      padding: 0 15px;
    }

    @media screen and (max-width: 375px) {
      height: 140px;
      padding: 0 12px;
    }
  }

  .catalogCard > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0 32px 32px;
    height: 200px;
    width: 245px;

    @media screen and (max-width: 1440px) {
      height: 180px;
      width: 220px;
      padding: 25px 0 25px 25px;
    }

    @media screen and (max-width: 1024px) {
      height: 160px;
      width: 200px;
      padding: 20px 0 20px 20px;
    }

    @media screen and (max-width: 768px) {
      height: 140px;
      width: auto;
      flex: 1;
      padding: 15px 0 15px 0;
    }

    @media screen and (max-width: 480px) {
      height: 120px;
      padding: 10px 0 10px 0;
    }
  }

  .catalogCard > div > p:nth-child(2) {
    font-size: 14px;
    margin-top: auto;

    @media screen and (max-width: 1024px) {
      font-size: 13px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  .catalogText {
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  .catalogCard img {
    max-width: 180px;
    max-height: 180px;
    width: auto;
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 1440px) {
      max-width: 160px;
      max-height: 160px;
    }

    @media screen and (max-width: 1024px) {
      max-width: 140px;
      max-height: 140px;
    }

    @media screen and (max-width: 768px) {
      max-width: 120px;
      max-height: 120px;
    }

    @media screen and (max-width: 480px) {
      max-width: 100px;
      max-height: 100px;
    }

    @media screen and (max-width: 375px) {
      max-width: 80px;
      max-height: 80px;
    }
  }

  .brands {
    padding-top: 72px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 100px;

    @media screen and (max-width: 1440px) {
      padding-top: 60px;
      gap: 25px;
      margin-bottom: 80px;
    }

    @media screen and (max-width: 1024px) {
      padding-top: 50px;
      gap: 20px;
      margin-bottom: 70px;
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      padding-top: 40px;
      gap: 15px;
      margin-bottom: 60px;
    }

    @media screen and (max-width: 480px) {
      padding-top: 30px;
      gap: 12px;
      margin-bottom: 50px;
    }
  }

  .blogGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .blogCard img {
    width: 100%;
    border-radius: 16px;
    padding-bottom: 29px;
  }

  .blogCard p:nth-child(2) {
    padding-bottom: 24px;
  }

  .blogWord {
    display: flex;
    justify-content: space-around;
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 24px;
  }

  .blogDate {
    color: #454545;
    font-size: 14px;
  }

  .brands img {
    max-width: 160px;
    width: 100%;
    object-fit: contain;

    @media screen and (max-width: 1440px) {
      max-width: 140px;
    }

    @media screen and (max-width: 1024px) {
      max-width: 120px;
    }

    @media screen and (max-width: 768px) {
      max-width: 100px;
    }

    @media screen and (max-width: 480px) {
      max-width: 80px;
    }
  }

  .blogGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    @media screen and (max-width: 480px) {
      gap: 12px;
    }
  }

  .blogCard img {
    width: 100%;
    border-radius: 16px;
    padding-bottom: 29px;

    @media screen and (max-width: 1024px) {
      border-radius: 14px;
      padding-bottom: 24px;
    }

    @media screen and (max-width: 768px) {
      border-radius: 12px;
      padding-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
      border-radius: 10px;
      padding-bottom: 16px;
    }
  }

  .blogCard p:nth-child(2) {
    padding-bottom: 24px;

    @media screen and (max-width: 768px) {
      padding-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
      padding-bottom: 16px;
    }
  }

  .blogWord {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 24px;

    @media screen and (max-width: 1440px) {
      font-size: 18px;
      padding-bottom: 20px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 16px;
      padding-bottom: 18px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
      padding-bottom: 16px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
      padding-bottom: 14px;
    }
  }

  .blogDate {
    color: #454545;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    @media screen and (max-width: 480px) {
      gap: 15px;
    }
  }

  .sectionHeader h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 53px;

    @media screen and (max-width: 1440px) {
      font-size: 36px;
      margin-bottom: 45px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 35px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 375px) {
      font-size: 22px;
      margin-bottom: 25px;
    }
  }

  .brandText {
    margin-top: 71px;
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 1440px) {
      margin-top: 60px;
      font-size: 36px;
    }

    @media screen and (max-width: 1024px) {
      margin-top: 50px;
      font-size: 32px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 40px;
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      margin-top: 30px;
      font-size: 24px;
    }

    @media screen and (max-width: 375px) {
      margin-top: 25px;
      font-size: 22px;
    }
  }

  .sectionHeader button {
    background: transparent;
    border: 1px solid #454545;
    padding: 14px 48px;
    border-radius: 100px;
    cursor: pointer;
    margin-bottom: 53px;

    @media screen and (max-width: 1440px) {
      padding: 12px 40px;
      margin-bottom: 45px;
    }

    @media screen and (max-width: 1024px) {
      padding: 10px 35px;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 30px;
      margin-bottom: 35px;
      align-self: flex-start;
    }

    @media screen and (max-width: 480px) {
      padding: 8px 25px;
      margin-bottom: 30px;
      font-size: 14px;
    }

    @media screen and (max-width: 375px) {
      padding: 8px 20px;
      font-size: 13px;
    }
  }

  .sectionHeaderButton > span {
    font-size: 16px;
    font-weight: 600;
    color: #454545;

    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;
