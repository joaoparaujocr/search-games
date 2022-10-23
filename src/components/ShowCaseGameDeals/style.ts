import styled from "styled-components";

const MainShowCase = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;

  @media screen and (max-width: 340px) {
    flex-direction: column;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;

    @media screen and (max-width: 700px) {
      width: 40%;
    }

    @media screen and (max-width: 320px) {
      width: 100%;
    }

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }

  ul {
    width: 80%;
    list-style: none;
    display: flex;
    overflow-x: auto;
    color: white;
    padding: 20px 0;

    @media screen and (max-width: 700px) {
      width: 60%;
    }

    @media screen and (max-width: 340px) {
      width: 100%;
    }

    ::-webkit-scrollbar {
      width: 1px;
      height: 8px;
    }
    

    ::-webkit-scrollbar-thumb {
      background-color: var(--secondy-color);
      border-radius: 10px;
    }
  }
`

export default MainShowCase