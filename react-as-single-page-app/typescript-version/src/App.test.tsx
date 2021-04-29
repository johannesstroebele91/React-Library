import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// The App.tsx handels all changes to the page
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
