import { render, screen } from "@testing-library/react";
import CartDeal from "../../components/CardDeal";
import { cardDealMock } from "../mocks"

describe("CardDeal component", () => {
  test("should be able to render a CardMain", () => {
    render(<CartDeal dealID={cardDealMock.dealID} price={cardDealMock.price} retailPrice={cardDealMock.retailPrice} key={cardDealMock.dealID} />)
    
    expect(screen.getByText("De: R$ 19,99")).toBeTruthy();
    expect(screen.getByText("Por: R$ 5,00")).toBeTruthy();
    expect(screen.getByText("Ir para a loja")).toBeTruthy();
  })
})