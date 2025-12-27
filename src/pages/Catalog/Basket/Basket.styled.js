import React from "react";
import styled from "styled-components";

export const BasketWrapper = styled.div`
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    margin-top: 48px;
    font-size: 14px;

    a {
      color: rgba(69, 69, 69, 1);
      text-decoration: none;
    }

    span {
      color: rgba(159, 159, 159, 1);
    }
  }

  .basket-container {
    margin: 40px 200px;
    padding: 40px 0;
  }

  h1 {
    color: rgba(69, 69, 69, 1);
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .table-container {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 40px;
    border: 1px solid rgba(217, 217, 217, 1);
  }

  .table-header {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr 2fr 1.5fr 1fr 0.5fr;
    background-color: rgba(242, 242, 242, 1);
    padding: 20px;
    font-weight: 600;
    color: rgba(69, 69, 69, 1);
    font-size: 16px;
    text-align: center;
  }

  .table-row {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr 2fr 1.5fr 1fr 0.5fr;
    padding: 20px;
    border-top: 1px solid rgba(217, 217, 217, 1);
    align-items: center;
    background-color: rgba(242, 242, 242, 1);
  }

  .column-photo {
    display: flex;
    justify-content: center;
  }

  .column-photo img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    background: #f5f5f5;
  }

  .column-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: rgba(69, 69, 69, 1);
    margin-bottom: 5px;
    line-height: 1.3;
  }

  .product-price {
    font-size: 16px;
    font-weight: 700;
    color: rgba(69, 69, 69, 1);
    margin-top: 5px;
  }

  .column-description {
    font-size: 14px;
    color: rgba(69, 69, 69, 1);
    line-height: 1.4;
    padding: 0 10px;
  }

  .column-article {
    font-size: 13px;
    color: rgba(159, 159, 159, 1);
    line-height: 1.4;
    padding: 0 10px;
    font-weight: 500;
    text-align: center;
  }

  .column-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: rgba(242, 242, 242, 1);
    border-radius: 100px;
    padding: 5px 15px;
  }

  .quantity-btn {
    width: 25px;
    height: 25px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  .quantity-value {
    min-width: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: rgba(69, 69, 69, 1);
    border: 1px solid #45454510;
    border-radius: 10px;
    padding: 19px 27px;
  }

  .column-delete {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete-btn {
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .order-form-container {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(217, 217, 217, 1);
    margin-bottom: 40px;
  }

  .order-form-header {
    background-color: rgba(242, 242, 242, 1);
    padding: 20px;
    font-size: 24px;
    font-weight: 700;
    color: rgba(69, 69, 69, 1);
    margin: 0;
  }

  .form-content {
    padding: 30px;
  }

  .personal-info-form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  .form-group {
    width: 100%;
  }

  .form-group input {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid rgba(69, 69, 69, 1);
    border-radius: 100px;
    font-size: 14px;
    outline: none;
    background: white;
    box-sizing: border-box;
  }

  .form-group input::placeholder {
    color: rgba(69, 69, 69, 1);
  }

  .delivery-form {
    border-top: 1px solid rgba(217, 217, 217, 1);
    padding-top: 30px;
  }

  .delivery-form h4 {
    font-size: 20px;
    font-weight: 700;
    color: rgba(69, 69, 69, 1);
    margin: 0 0 20px 0;
  }

  .delivery-form .form-group {
    margin-bottom: 20px;
  }

  .delivery-form .form-group:last-child {
    margin-bottom: 0;
  }

  .delivery-form textarea {
    width: 100%;
    padding: 15px 20px;
    border: 1px solid rgba(69, 69, 69, 1);
    border-radius: 15px;
    font-size: 14px;
    outline: none;
    background: white;
    box-sizing: border-box;
    min-height: 100px;
    resize: vertical;
    font-family: inherit;
  }

  .delivery-form textarea::placeholder {
    color: rgba(69, 69, 69, 1);
  }

  .payment-summary {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(217, 217, 217, 1);
    padding: 30px;
  }

  .payment-summary h3 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(69, 69, 69, 1);
    margin: 0 0 25px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
  }

  .payment-details {
    margin-bottom: 25px;
  }

  .payment-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 16px;
    color: rgba(69, 69, 69, 1);
  }

  .payment-row.total {
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(217, 217, 217, 1);
    margin-bottom: 0;
  }

  .total-price {
    font-size: 24px;
    color: rgba(69, 69, 69, 1);
  }

  .buy-btn {
    width: 100%;
    padding: 16px;
    background-color: rgba(69, 69, 69, 1);
    color: white;
    border: none;
    border-radius: 100px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px 0;
  }

  .privacy-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  .privacy-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .privacy-checkbox label {
    font-size: 14px;
    color: rgba(69, 69, 69, 1);
    cursor: pointer;
  }
`;
