import { screen, render } from "@testing-library/react";
import NavBar from "../../components/NavBar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("NavBar component", () => {
  test("should be able render a NavBar element", () => {
    render(<NavBar />);

    expect(screen.getByRole("heading", { name: "Search Games" })).toBeTruthy();
    expect(screen.getByTestId("element-box-controller")).toBeTruthy();
    expect(screen.getByTestId("button-cart")).toBeTruthy();
    expect(screen.getByPlaceholderText("Digite sua pesquisa")).toBeTruthy();
    expect(screen.getByTestId("button-search")).toBeTruthy();
  });

})