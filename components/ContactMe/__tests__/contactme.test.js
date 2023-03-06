import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactMe from "../ContactMe";

describe("Contact me", () => {
  it("renders component unchanged", () => {
    const { container } = render(<ContactMe />);

    expect(container).toMatchSnapshot();
  });
});
