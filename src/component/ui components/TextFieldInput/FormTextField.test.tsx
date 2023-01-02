import { render, screen } from "@testing-library/react";
import TextFieldInput from ".";

describe("Text Input", () => {
  test("Render Input", () => {
    render(
      <TextFieldInput
        error={false}
        title="tttt"
        handleChange={(v) => {}}
        handleSubmit={() => {}}
      />
    );
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
  });

  test("Display Error ", () => {
    render(
      <TextFieldInput
        error={true}
        title="tt"
        handleChange={(v) => {}}
        handleSubmit={() => {}}
      />
    );
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });
    const ErrMsg = screen.getByText(/your todo length must be more than 2/i);
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
    expect(ErrMsg).toBeInTheDocument();
  });
});
