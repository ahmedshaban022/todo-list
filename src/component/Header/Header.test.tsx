import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("Render header", () => {
    render(<Header />);
    const headerText = screen.getByRole("heading", { name: "Todo-List" });
    expect(headerText).toBeInTheDocument();
  });
});
