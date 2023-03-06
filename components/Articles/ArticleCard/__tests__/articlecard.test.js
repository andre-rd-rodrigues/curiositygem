import { render, screen } from "@testing-library/react";
import ArticleCard from "../ArticleCard";
import "@testing-library/jest-dom";
import article from "mocks/article";

describe("Article Card", () => {
  it("renders component unchanged", () => {
    const { container } = render(<ArticleCard article={article} />);

    expect(container).toMatchSnapshot();
  });

  it("renders article from props correctly", () => {
    render(<ArticleCard article={article} />);

    const articleTitleElement = screen.getByText(
      /Transform Your Home into a Smart Home: 5 Ways to Automate Your House/i
    );
    const articleDescriptionElement = screen.getByText(
      /Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house?/i
    );

    expect(articleTitleElement).toBeInTheDocument();
    expect(articleDescriptionElement).toBeInTheDocument();
  });
});
