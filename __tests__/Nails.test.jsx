import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Nails from "../src/components/Nails";
jest.mock("@/assets/images/nails.jpg", () => "mock-image-path");

describe("Nails Component", () => {
    beforeEach(() => {
        render(<Nails />);
    });

    afterEach(() => {
        cleanup();
    });

    test("renders the Nails component", () => {
        const heading = screen.getByText("NAILS");
        expect(heading).toBeInTheDocument();

        const description = screen.getByText(
            /Perfectly polished nails for a flawless, stylish finish./i
        );
        expect(description).toBeInTheDocument();

        const button = screen.getByRole("link", { name: /BOOK NOW/i });
        expect(button).toBeInTheDocument();
    });

    test("has correct background image", () => {
        const bgDiv = screen.getByTestId("nails-bg"); 
        expect(bgDiv).toHaveStyle(`background-image: url(mock-image-path)`);
    });
});