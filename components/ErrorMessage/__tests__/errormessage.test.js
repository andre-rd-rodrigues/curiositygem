import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "../ErrorMessage";

describe("Error message", () => {
  it("renders component unchanged", () => {
    const { container } = render(<ErrorMessage />);

    expect(container).toMatchSnapshot();
  });
});
