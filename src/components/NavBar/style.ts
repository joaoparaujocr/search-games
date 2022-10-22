import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: auto;
  display: flex;
  padding: 30px 2%;
  justify-content: space-between;
  align-items: center;

  > .logo {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button.Cart {
      margin-right: 30px;
      background-color: white;
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    > .boxSearch {
      background-color: white;
      margin-right: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;

      input {
        border-radius: 5px;
        height: 30px;
        background-color: transparent;
        border: 0;
        outline: none;
        padding-left: 7px;
        font-size: 18px;
      }

      > button {
        padding: 5px;
      }
    }
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 5px;

    svg {
      background-color: transparent;
    }
  }

  h1 {
    color: var(--secondy-color);
  }
`