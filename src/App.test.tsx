import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jobs page', () => {
  render(<App />);

  const title = screen.getByText(/Jobs/i);
  expect(title).toBeInTheDocument();
});
