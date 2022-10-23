import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Greet render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("greet render ith name props", () => {
    render(<Greet name="nimesh" />);
    const textElement = screen.getByText("Hello nimesh");
    expect(textElement).toBeInTheDocument();
  });
});
