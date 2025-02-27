import "@testing-library/jest-dom"; //Required for `.toBeInTheDocument()`
import React from "react";
import { render, screen } from "@testing-library/react";
import Facial from "../src/components/Facial"
jest.mock("@/assets/images/facial.jpg", () => "mock-image-path");


describe("Facial Component", () => {
  test("renders the FACIALS heading", () => {
    render(<Facial />);
    expect(screen.getByText("FACIALS")).toBeInTheDocument();
  });
  test("renders the description", () => {
    render(<Facial />);
    expect(
      screen.getByText(
        /Revitalize your skin with facials designed to cleanse, hydrate, and restore your natural glow./i
      )
    ).toBeInTheDocument();
  });

  test("renders the 'BOOK NOW' button", () => {
    render(<Facial />);
    expect(screen.getByRole("link", { name: /BOOK NOW/i })).toBeInTheDocument();
  });

  test("applies the background image", () => {
    render(<Facial />);
    const bgDiv = screen.getByTestId("facial-bg"); // Use getByTestId
    expect(bgDiv).toHaveStyle(`background-image: url(mock-image-path)`);
  });
});