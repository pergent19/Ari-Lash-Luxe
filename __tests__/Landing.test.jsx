import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Landing from "../src/components/Landing";
jest.mock("@/assets/images/landing.jpg", () => "mock-image-path");

describe("Landing Component", () => {
    beforeEach(() => {
        render(<Landing />);
    });

    afterEach(() => {
        cleanup();
    });

    test('renders the Gallery component', () => {

        const heading = screen.getByText('WELCOME TO THE NEW ERA');
        expect(heading).toBeInTheDocument();

        const description = screen.getByText('LASHES IN MINUTES, NOT HOURS');
        expect(description).toBeInTheDocument();

        const button = screen.getByRole('link', { name: /BOOK NOW/i });
        expect(button).toBeInTheDocument();
    });

    test('has correct background image', () => {
        const divElement = screen.getByTestId('landing-container'); 

        expect(divElement).toHaveStyle(`background-image: url(mock-image-path)`);
    });
});