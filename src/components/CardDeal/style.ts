import styled from "styled-components";

const LiCard = styled.li`
  min-width: 220px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0 10px;
  padding: 20px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .boxPrices {
    display: flex;
    justify-content: space-between;

    .price {
      color: var(--secondy-color);
    }

    .retailPrice {
      color: var(--tertiary-color);
    }
  }

  a {
    background: var(--secondy-color);
    color: white;
    padding: 5px 7px;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
  }
`

export default LiCard