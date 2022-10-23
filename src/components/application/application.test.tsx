import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Application rendered successfully ", () => {
    render(<Application />);
    const jobApplicationHeadingOne = screen.getByRole("heading", {
      level: 1,
    });
    expect(jobApplicationHeadingOne).toBeInTheDocument();

    const jobApplicationHeadingTwo = screen.getByRole("heading", {
      level: 2,
    });
    expect(jobApplicationHeadingTwo).toBeInTheDocument();
    const textBoxElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(textBoxElement).toBeInTheDocument();
    const bioTextElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioTextElement).toBeInTheDocument();
    const comboBoxElement = screen.getByRole("combobox");
    expect(comboBoxElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
