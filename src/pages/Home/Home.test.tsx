import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("render", () => {
  test("home page", () => {
    render(<Home />);
    const homePagetext = screen.getByText("Home");
    expect(homePagetext).toBeInTheDocument();
  });
});
