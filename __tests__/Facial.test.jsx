import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Facial from "../src/components/Facial"
jest.mock("@/assets/images/facial.jpg", () => "mock-image-path");


describe("Facial Component", () => {
    beforeEach(() => {
      render(<Facial />);
    });
  
    afterEach(() => {
      cleanup();
    });
  test("renders the FACIALS component", () => {
    const heading = screen.getByText("FACIALS");
    expect(heading).toBeInTheDocument();

    const description = screen.getByText(
      /Revitalize your skin with facials designed to cleanse, hydrate, and restore your natural glow./i
    );
    expect(description).toBeInTheDocument();

    const button = screen.getByRole("link", { name: /BOOK NOW/i });
    expect(button).toBeInTheDocument();

  });

  test("has correct background image", () => {
    const bgDiv = screen.getByTestId("facial-bg"); 
    expect(bgDiv).toHaveStyle(`background-image: url(mock-image-path)`);
  });
});