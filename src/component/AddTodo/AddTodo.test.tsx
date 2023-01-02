import { render, screen } from "@testing-library/react";
import { AddTodo } from ".";
import userEvent from "@testing-library/user-event";

describe("Add-Todo", () => {
  test("Render Input", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    expect(todoInput).toBeInTheDocument();
  });
});

describe("From Add Todo Text Input", () => {
  test("Render Input", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
  });

  test("---", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });
    // const ErrMsg = screen.getByText(/your todo length must be more than 2/i);
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
    // expect(ErrMsg).toBeInTheDocument();
  });
});

describe("From Add Todo Text Input handleChange ", () => {
  test("Render Input", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
  });

  test("change with value more than 2 chars ", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });

    userEvent.type(todoInput, "333");
    // const ErrMsg = screen.getByText(/your todo length must be more than 2/i);
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
    // expect(ErrMsg).not.toBeInTheDocument();
  });

  test("change value to be 2 chars  to display Error Msg", () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });

    userEvent.type(todoInput, "33");
    const ErrMsg = screen.getByText(/your todo length must be more than 2/i);
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
    expect(ErrMsg).toBeInTheDocument();
  });

  test("change value to be 2 chars  to display  Error Msg when Click on Add Btn", async () => {
    render(<AddTodo />);
    const todoInput = screen.getByRole("textbox", {
      name: "Enter Your Todo",
    });
    const AddBtn = screen.getByRole("button", { name: "Add Todo" });

    // userEvent.type(todoInput, "33");
    userEvent.click(AddBtn);
    const ErrMsg = screen.getByText(/your todo length must be more than 2/i);

    expect(ErrMsg).toBeInTheDocument();
    expect(todoInput).toBeInTheDocument();
    expect(AddBtn).toBeInTheDocument();
  });
});
