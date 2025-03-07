import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Navbar from "../src/components/header/Navbar";
jest.mock("@/assets/images/logo.png", () => "mock-logo-path");

describe("Navbar Component", () => {
    beforeEach(() => {
        render(<Navbar />);
    });

    afterEach(() => {
        cleanup();
    });

    test("renders the navigation links", () => {
        const navLinks = screen.getAllByRole('link');
        expect(navLinks).toHaveLength(5); // Adjust the number based on your navigation items
        expect(screen.getByText('LASH EXTENSIONS')).toBeInTheDocument();
        expect(screen.getByText('FACIALS')).toBeInTheDocument();
        expect(screen.getByText('NAILS')).toBeInTheDocument();
        expect(screen.getByText('GALLERY')).toBeInTheDocument();
        expect(screen.getByText('FAQ')).toBeInTheDocument();
    });

    test("renders the logo", () => {
        const logo = screen.getByAltText('Ari Lash Luxe');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', 'mock-logo-path');
    });

    test("toggles the mobile menu", () => {
        const openButton = screen.getByRole('button', { name: /open main menu/i });
        fireEvent.click(openButton);
        expect(screen.getByRole('dialog')).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: /close menu/i });
        fireEvent.click(closeButton);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});