import styled from "styled-components";

const CardLi = styled.li`
  width: calc((100% / 4) - 9px);
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px 15px;

  @media screen and (max-width: 900px) {
    width: calc((100% / 3) - 9px);
  }

  @media screen and (max-width: 700px) {
    width: calc((100% / 2) - 9px);
  }

  @media screen and (max-width: 500px) {
    max-width: 400px;
    width: calc(100%);
  }

  figure {
    border-radius: 5px;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 100%;
      width: 70%;
      object-fit: contain;
      object-position: top;
    }
  }

  h2 {
    margin-top: 10px;
    font-size: 18px;
    color: var(--tertiary-color);
    background: transparent;
  }

  .boxInfo {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .normalPrice {
      color: var(--tertiary-color);
    }

    .salePrice {
      color: var(--secondy-color);
    }

    .starRating {
      color: gold;
      display: flex;
      font-size: 20px;

      svg {
        margin-right: 7px;
      }
    }
  }

  .boxButtons {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    button, a {
      margin: 5px 0;
      border-radius: 5px;
      width: 100%;
      cursor: pointer;
      border: none;
      font-size: 18px;
      font-weight: 100;
      padding: 8px 0;
    }

    button.addToCart {
      background-color: var(--secondy-color);
      color: white;
    }

    button.viewPrices {
      background-color: var(--tertiary-color);
      color: var(--secondy-color);
    }

    a {
      background-color: var(--secondy-color);
      color: white;
      text-decoration: none;
      text-align: center;
    }
    
  }
`

export default CardLi