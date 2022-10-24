import { render, screen} from "@testing-library/react";
import CardCart from "../../components/CardCart";
import { cardCartMock } from "../mocks"

describe("CardCart component", () => {
  test("should be able to render a CardCart", () => {
    render(<CardCart game={cardCartMock.game} gameID={cardCartMock.gameID} thumb={cardCartMock.thumb} title={cardCartMock.title} />);

    expect(screen.getByRole("heading", { name: cardCartMock.title })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Remover" }))
  });
})
