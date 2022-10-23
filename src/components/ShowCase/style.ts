import styled from "styled-components";

const MainShowCase = styled.main`
  width: 100%;
  padding: 0 2% 60px 2%;

  h2 {
    margin: 10px 0;
    color: var(--tertiary-color);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 500px) {
      gap: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`
export default MainShowCase
