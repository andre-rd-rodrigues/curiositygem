import { render, screen } from "@testing-library/react";
import Button from "../AppButton";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders component unchanged", () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it("renders label from props correctly", () => {
    render(<Button label="read more" />);

    const element = screen.getByText(/read more/i);

    expect(element).toBeInTheDocument();
  });
});
