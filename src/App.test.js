import { render, screen } from '@testing-library/react';
import PhishApp from './PhishApp';

test('renders learn react link', () => {
  render(<PhishApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
