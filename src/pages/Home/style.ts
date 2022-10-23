import styled from "styled-components";

const BoxPages = styled.div`
  margin: 20px auto;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  p, button {
    color: white;
    font-size: 20px;
    background-color: var(--secondy-color);
    padding: 5px 7px;
    border-radius: 5px;

  }

  button {
    background-color: black;
    cursor: pointer;
    border: 1px solid white;
  }

  button.previousPage {
    margin-right: 5px;
  }

  button.nextPage {
    margin-left: 5px;
  }
`

export default BoxPages