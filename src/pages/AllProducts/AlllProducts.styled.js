import styled from "styled-components";

export const AllProductsWrapper = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sectionHeader h2 {
    font-size: 40px;
    font-weight: 700;
  }

  .productsGrid {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 20px;
  }

  .productCard {
    text-align: center;
    padding: 12px;
    background: #fff;
    border-radius: 12px;
  }

  .productCard p,
  strong {
    color: #454545 !important;
  }

  .productCard img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 33px;
  }
  .delPrice {
    font-size: 12px;
  }
`;
