import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);

    // Verifica que elementos específicos estén presentes en el Footer
    expect(screen.getByAltText('Logo vencer')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument(); // Verifica si hay alguna imagen presente

    // Verifica si los iconos de redes sociales están presentes
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tiktok-icon')).toBeInTheDocument();
  });
});