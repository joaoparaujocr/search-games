import { render, screen } from "@testing-library/react";
import CardMain from "../../components/CardMain";
import { cardMainMock } from "../mocks/index";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CardMain Component", () => {
  test("should be able render a CardMain element", () => {
    render(
      <CardMain
        dealID={cardMainMock.dealID}
        game={cardMainMock.game}
        gameID={cardMainMock.gameID}
        normalPrice={cardMainMock.normalPrice}
        salePrice={cardMainMock.salePrice}
        steamRatingPercent={cardMainMock.steamRatingPercent}
        thumb={cardMainMock.thumb}
        title={cardMainMock.title}
        key={cardMainMock.gameID}
      />
    );

    expect(screen.getByAltText(cardMainMock.title)).toBeTruthy();
    expect(screen.getByTitle(cardMainMock.title)).toBeTruthy();
    expect(screen.getByRole("heading", { name: cardMainMock.title })).toBeTruthy();    
    expect(screen.getByText("De: R$ 19,99")).toBeTruthy();
    expect(screen.getByText("Por: R$ 4,99")).toBeTruthy();
    expect(screen.getByText(cardMainMock.steamRatingPercent)).toBeTruthy();
    expect(screen.getByText("Adicionar ao carrinho de busca")).toBeTruthy();
    expect(screen.getByText("Ver mais preços")).toBeTruthy();
    expect(screen.getByText("Ir para a loja")).toBeTruthy();
  });
});
