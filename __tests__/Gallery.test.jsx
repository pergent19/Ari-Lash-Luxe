import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '../src/components/Gallery';
jest.mock("@/assets/images/gallery.jpg", () => "mock-image-path");

describe('Gallery Component', () => {
  test('renders the Gallery component', () => {
    const { getByText, getByRole } = render(<Gallery />);

    // Check if the heading is rendered
    const heading = getByText('GALLERY');
    expect(heading).toBeInTheDocument();

    // Check if the button is rendered
    const button = getByRole('link', { name: /SEE MORE/i });
    expect(button).toBeInTheDocument();
  });

  test('has correct background image', () => {
    const { container } = render(<Gallery />);
    const divElement = container.firstChild;

    // Check if the background image is set correctly
    expect(divElement).toHaveStyle(`background-image: url(mock-image-path)`);
  });
});