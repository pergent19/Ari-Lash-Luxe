import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Lash from "../src/components/Lash";
jest.mock("@/assets/images/lash.jpg", () => "mock-image-path");

describe("Lash Component", () => {
    beforeEach(() => {
        render(<Lash />);
    });

    afterEach(() => {
        cleanup();
    });

    test("renders the LASH component", () => {
        const heading = screen.getByText("LASH EXTENSION");
        expect(heading).toBeInTheDocument();

        const description = screen.getByText(
            /Enhance your beauty with lush, customized lash extensions for a flawless look./i
        );
        expect(description).toBeInTheDocument();

        const button = screen.getByRole("link", { name: /BOOK NOW/i });
        expect(button).toBeInTheDocument();
    });

    test("has correct background image", () => {
        const bgDiv = screen.getByTestId("lash-bg"); 
        expect(bgDiv).toHaveStyle(`background-image: url(mock-image-path)`);
    });
});