import { render, screen } from "@testing-library/react";
import ShowCase from "../../components/ShowCase";
import { listGamesShowCase } from "../mocks";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ShowCase component", () => {
  test("should be able to display a text by has not found any results", () => {
    render(<ShowCase listGames={[]} title="ASXDFDFFF" />);

    expect(screen.getByRole("heading", { name: "ASXDFDFFF" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Nada foi encontrado!" })).toBeTruthy();
  
  })

  test("should be able to render list items", () => {
    render(<ShowCase listGames={listGamesShowCase} title="Principais ofertas"/>);

    expect(screen.getByRole("heading", { name: "Principais ofertas" })).toBeTruthy();    
    
    expect(screen.getByAltText(listGamesShowCase[0].title)).toBeTruthy();
    expect(screen.getByTitle(listGamesShowCase[0].title)).toBeTruthy();
    expect(screen.getByRole("heading", { name: listGamesShowCase[0].title })).toBeTruthy();    
    expect(screen.getByText("De: R$ 34,99")).toBeTruthy();
    expect(screen.getByText("Por: R$ 23,11")).toBeTruthy();
    expect(screen.getByText(listGamesShowCase[0].steamRatingPercent)).toBeTruthy();

    expect(screen.getByAltText(listGamesShowCase[1].title)).toBeTruthy();
    expect(screen.getByTitle(listGamesShowCase[1].title)).toBeTruthy();
    expect(screen.getByRole("heading", { name: listGamesShowCase[1].title })).toBeTruthy();    
    expect(screen.getByText("De: R$ 69,99")).toBeTruthy();
    expect(screen.getByText("Por: R$ 7,00")).toBeTruthy();
    expect(screen.getByText(listGamesShowCase[1].steamRatingPercent)).toBeTruthy();

    expect(screen.getAllByText("Adicionar ao carrinho de busca")).toHaveLength(2)
    expect(screen.getAllByText("Ver mais preços")).toHaveLength(2);
    expect(screen.getAllByText("Ir para a loja")).toHaveLength(2);
  })
})