import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gallery from "../src/components/Gallery";
jest.mock("@/assets/images/gallery.jpg", () => "mock-image-path");

describe("Gallery Component", () => {
  beforeEach(() => {
    render(<Gallery />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders the Gallery component", () => {

    const heading = screen.getByText("GALLERY");
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("link", { name: /SEE MORE/i });
    expect(button).toBeInTheDocument();
  });

  test("has correct background image", () => {
    const divElement = screen.getByTestId('gallery-container'); 
    expect(divElement).toHaveStyle(`background-image: url(mock-image-path)`);
  });
});
