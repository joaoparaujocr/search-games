import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: auto;
  display: flex;
  padding: 30px 2%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 10px 2%;

    h1 {
      margin-bottom: 20px;
    }
  }

  > .logo {
    cursor: pointer;
  }

  > div {
    max-width: 340px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button.Cart {
      margin-right: 30px;
      background-color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      svg {
        font-size: 20px;
      }

      @media screen and (max-width: 340px) {
        width: 25px;
        height: 25px;
        margin: 10px;

        svg {
          font-size: 18px;
        }
      }
    }

    > .boxSearch {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: white;
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

      @media screen and (max-width: 320px) {
        
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