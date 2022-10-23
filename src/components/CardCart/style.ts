import styled from "styled-components";

const LiCart = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: black;
  max-height: 100px;
  margin: 5px 0;
  border-radius: 5px;
  color: white;
  padding: 5px;
  height: 85px;

  figure {
    max-width: 50px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
    align-items: flex-start;

    button {
      background-color: var( --secondy-color);
      cursor: pointer;
      border: none;
      border-radius: 5px;
      padding: 5px 7px;
    }
  }
`

export default LiCart