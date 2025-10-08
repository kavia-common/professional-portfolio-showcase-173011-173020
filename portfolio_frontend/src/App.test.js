import { render, screen } from '@testing-library/react';
import App from './App';

test('renders key section headings', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /Projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /Skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /Contact/i })).toBeInTheDocument();
});
