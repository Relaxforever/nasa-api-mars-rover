import { render, screen } from '@testing-library/react';
import React   from 'react'
import App from './App';

test('Expect Button Word', () => {
  render(<App />);
  const linkElement = screen.getByText(/Curiosity/i);
  expect(linkElement).toBeInTheDocument();
});
