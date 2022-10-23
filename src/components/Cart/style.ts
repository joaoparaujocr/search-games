import styled from "styled-components";

const ContainerCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.67);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1% 2%;


  main {
    background-color: var(--secondy-color);
    max-width: 400px;
    width: 100%;
    border-radius: 5px;

    header {
      display: flex;
      padding: 15px 10px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid white;

      h3 {
        color: white;
      }
    }

    ul.listCartGames {
      padding: 0 2%;
      height: 100%;
      overflow: auto;
      max-height: 400px;

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
      }
    }

    .btnsCart {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 5px 2%;

      .btnClearCart, .btnSearch {
        cursor: pointer;
        padding: 6px 0;
        width: 49%;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        font-size: 16px;
      }

      .btnSearch {
        background-color: var(--primary-color);
        color: var(--secondy-color);
      }
    }
    
  }
`

export default ContainerCart