import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App.jsx";

test("renders the correct child components", () => {
  const { container } = render(<App />);

  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

test("renders dynamic content from props", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("My Personal Blog");
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getByText(/Props let components receive data/i)).toBeInTheDocument();
});
