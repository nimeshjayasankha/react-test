import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Application rendered successfully", () => {
    render(<Application />);
    const textBoxElement = screen.getByRole("textbox");
    expect(textBoxElement).toBeInTheDocument();
  });
});
