import { screen, render } from "@testing-library/react";
import ShowCaseGameDeals from "../../components/ShowCaseGameDeals/index.";
import { infoGame } from "../mocks"

describe("ShowCaseGameDeals component", () => {
  test("should be able to render list items", () => {
    render(<ShowCaseGameDeals infoGame={infoGame} />);

    expect(screen.getByText("Por: R$ 5,00")).toBeTruthy();
    expect(screen.getByText("Por: R$ 14,95")).toBeTruthy();
    expect(screen.getByText("Por: R$ 16,05")).toBeTruthy();
    expect(screen.getByText("Por: R$ 16,99")).toBeTruthy();
    expect(screen.getByText("Por: R$ 18,99")).toBeTruthy();
    expect(screen.getByText("De: R$ 20,61")).toBeTruthy();

    expect(screen.getAllByText("De: R$ 19,99")).toHaveLength(8);
    expect(screen.getAllByText("Por: R$ 19,99")).toHaveLength(4);
    expect(screen.getAllByText("Ir para a loja")).toHaveLength(9);
  })
})